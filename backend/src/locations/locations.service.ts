import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
import { InjectModel } from '@nestjs/mongoose';
import { Location, LocationDocument } from './entities/location.entity';
import { Status, StatusAllowed } from '_protos/common';
import { slugify } from 'libs/slug';
import { OnEvent } from '@nestjs/event-emitter';
import { EventTypeName } from '_protos/common/enums/event.enum';
import { EventPayload, EventType } from '_protos/common/dto/event.listener.dto';
import { IUploadCSVObject } from '_protos/common/interfaces';
import { CategoryInput } from 'src/categories/dto/create-category.input';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name)
    private readonly model: PaginateModel<LocationDocument>,
  ) {}

  @OnEvent(EventTypeName.LocationDataUpload)
  async handleBigDataProcess({
    payload,
    type,
  }: EventPayload<{
    data: IUploadCSVObject[];
    categoriesId: ObjectId[];
    categories: CategoryInput[];
  }>) {
    if (type !== EventType.LOCATIONS) {
      throw new BadRequestException('Evento no valido', 'Event not valid');
    }

    const storageSlugs = [];
    const storage = new Map<
      string,
      {
        insertOne?: { document: CreateLocationInput };
        updateOne?: {
          filter: {
            _id: UpdateLocationInput['_id'];
          };
          update: any;
        };
      }
    >();
    payload.data.forEach((item) => {
      const slug = slugify(item.keyword.trim());

      storage.set(slug, {
        insertOne: {
          document: {
            name: item.keyword.trim(),
            image: '',
            status: Status.ACTIVE,
            slug,
            categoriesId: payload.categoriesId,
            categories: payload.categories,
          },
        },
      });
    });

    let exists = await this.model.find({
      slug: { $in: [...storage.keys()] },
    });

    [...storage.values()].forEach((item) => {
      const exist = exists.find(
        (_item) => _item.slug === item.insertOne.document.slug,
      );
      if (exist) {
        storage.set(item.insertOne.document.slug, {
          updateOne: {
            filter: {
              _id: exist._id,
            },
            update: {
              $addToSet: {
                categories: payload.categories[0],
                categoriesId: payload.categoriesId[0],
              },
            },
          },
        });
      }
      storageSlugs.push(item.insertOne.document.slug);
    });

    if (storage.size) {
      await this.model.bulkWrite([...storage.values()] as any[]);
    }

    exists = await this.model.find({ slug: { $in: storageSlugs } });

    return exists;
  }

  @OnEvent(EventTypeName.CategoryNameUpdated)
  async handleCategoryUpdate({
    payload,
  }: EventPayload<{
    categoryId: ObjectId;
    categories: CategoryInput[];
  }>) {
    const categoriesStorage = new Map<string, CategoryInput>();

    payload.categories.forEach((item) => {
      categoriesStorage.set(String(item._id), item);
    });

    const data = await this.model.find({
      categoriesId: payload.categoryId,
    });

    const storage = new Map<
      string,
      {
        updateOne?: {
          filter: {
            _id: UpdateLocationInput['_id'];
          };
          update: any;
        };
      }
    >();

    data.forEach((item) => {
      const categories = [];

      item.categoriesId.forEach((cat) => {
        const cate = categoriesStorage.get(String(cat));

        if (cate) {
          categories.push({
            name: cate.name,
            slug: cate.slug,
          });
        }
      });

      storage.set(item.slug, {
        updateOne: {
          filter: {
            _id: item._id,
          },
          update: {
            $set: {
              categories,
            },
          },
        },
      });
    });

    if (storage.size) {
      await this.model.bulkWrite([...storage.values()] as any[]);
    }

    return true;
  }

  async slugValidator(name: string) {
    const slug = slugify(name);

    const document = await this.findOne(
      {
        slug,
        disabled: false,
      },
      true,
    );

    return {
      slug,
      document,
      alreadyExist: !!document,
    };
  }

  async create(input: CreateLocationInput) {
    const { alreadyExist, slug } = await this.slugValidator(input.name);
    if (alreadyExist) {
      throw new BadRequestException('Ya existe', 'Already exist');
    }

    const document = await new this.model({
      ...input,
      slug,
    }).save();

    return document;
  }

  async findAll({ all, page, perPage, q, status }: SearchBaseInput) {
    const handleFilter = () => {
      let req: FilterQuery<LocationDocument> = {
        disabled: false,
      };
      if (q !== '') {
        req = {
          ...req,
          $or: [
            { name: { $regex: new RegExp(q, 'gi') } },
            { slug: { $regex: new RegExp(q, 'gi') } },
            {
              'categories.name': {
                $regex: new RegExp(q, 'gi'),
              },
            },
          ],
        };
      }
      if (status !== StatusAllowed.EMPTY) {
        req = { ...req, status };
      }

      return req;
    };

    const options = {
      limit: perPage,
      page,
      pagination: !all,
      sort: {
        name: 1,
      },
    };

    return await this.model.paginate(handleFilter(), options);
  }

  async findOne(option: FilterQuery<LocationDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateLocationInput) {
    const model = await this.findOne({ _id, disabled: false });
    let slug = model.slug;

    if (data.name !== model.name) {
      const item = await this.slugValidator(data.name);
      slug = item.slug;

      if (item.alreadyExist) {
        throw new BadRequestException('Ya existe', 'Already exist');
      }
    }

    await model.updateOne({
      $set: {
        ...data,
        slug,
      },
    });

    return 'Updated';
  }

  async toggleStatus(_id: ObjectId) {
    const model = await this.findOne({ _id, disabled: false });

    await model.updateOne({
      $set: {
        status:
          model.status === Status.ACTIVE ? Status.INACTIVE : Status.ACTIVE,
      },
    });
    return 'Updated status';
  }

  async remove(_id: ObjectId) {
    const model = await this.findOne({ _id, disabled: false });

    await model.updateOne({
      $set: {
        name: 'Location-Deleted',
        slug: `${model.slug}-deleted`,
        disabled: true,
        status: Status.INACTIVE,
      },
    });

    return 'Removed';
  }
}
