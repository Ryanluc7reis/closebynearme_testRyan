import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './entities/company.entity';
import { Status, StatusAllowed } from '_protos/common';
import { slugify } from 'libs/slug';
import { OnEvent } from '@nestjs/event-emitter';
import { EventTypeName } from '_protos/common/enums/event.enum';
import { IUploadCSVObject } from '_protos/common/interfaces';
import { EventPayload, EventType } from '_protos/common/dto/event.listener.dto';
import { Location } from 'src/locations/entities/location.entity';
import { CategoryInput } from 'src/categories/dto/create-category.input';
import { SearchCompanyInput } from './dto/search-company.input';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name)
    private readonly model: PaginateModel<CompanyDocument>,
  ) {}

  @OnEvent(EventTypeName.CompanyUploadCreate)
  async handleBatchUpload({
    payload,
    type,
  }: EventPayload<{
    data: IUploadCSVObject[];
    locations: Location[];
    categories: CategoryInput[];
    categoriesId: ObjectId[];
  }>) {
    if (type !== EventType.COMPANIES) {
      throw new BadRequestException('Evento no valido', 'Event not valid');
    }

    const storageSlugs = [];
    const storageLocations = new Map<string, Location>();
    const storage = new Map<
      string,
      { insertOne: { document: CreateCompanyInput } }
    >();

    payload.locations.forEach((item) => {
      storageLocations.set(item.slug, item);
    });

    payload.data.forEach((item) => {
      if (item.name?.trim()) {
        const slug = slugify(item.name?.trim());
        const locationSlug = slugify(item.keyword?.trim());
        const location = storageLocations.get(locationSlug);
        if (slug) {
          storage.set(slug, {
            insertOne: {
              document: {
                name: item.name?.trim(),
                address: item.address?.trim(),
                googleMapsLink: item.link,
                initialLetter: slug[0],
                phoneNumber: item['phone-number']?.trim(),
                websiteUrl: item.website?.trim(),
                categories: payload.categories,
                categoriesId: payload.categoriesId,
                slug,
                locationId: location._id,
                locationName: location.name,
                locationSlug: location.slug,
                status: Status.ACTIVE,
              },
            },
          });
        } else {
          console.log(item);
        }
      }
    });

    const exists = await this.model.find({
      slug: { $in: [...storage.keys()] },
    });

    [...storage.values()].forEach((item) => {
      const exist = exists.find(
        (_item) => _item.slug === item.insertOne.document.slug,
      );
      if (exist) {
        storage.delete(item.insertOne.document.slug);
      }
      storageSlugs.push(item.insertOne.document.slug);
    });

    if (storage.size) {
      await this.model.bulkWrite([...storage.values()]);
    }

    return 'done';
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

    const data = await this.model
      .find({
        categoriesId: payload.categoryId,
      })
      .select('_id slug categoriesId');

    const storage = new Map<
      string,
      {
        updateOne?: {
          filter: {
            _id: UpdateCompanyInput['_id'];
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

  async create(input: CreateCompanyInput) {
    const { slug, alreadyExist } = await this.slugValidator(input.name);

    if (alreadyExist) {
      throw new BadRequestException('Ya existe', 'Already exist');
    }

    const document = await new this.model({
      ...input,
      slug,
      initialLetter: slug[0],
    }).save();

    return document;
  }

  async findAll({
    all,
    page,
    perPage,
    q,
    status,
    locationId,
    categoryId,
    merchantListingStatus,
  }: SearchCompanyInput) {
    const handleFilter = () => {
      let req: FilterQuery<CompanyDocument> = {
        disabled: false,
      };
      if (q !== '') {
        const regex = { $regex: new RegExp(q, 'gi') };
        req = {
          ...req,
          $or: [
            { name: regex },
            { slug: regex },
            { locationName: regex },
            {
              'categories.name': regex,
            },
          ],
        };
      }
      if (status !== StatusAllowed.EMPTY) {
        req = { ...req, status };
      }

      if (locationId) {
        req = { ...req, locationId };
      }

      if (categoryId) {
        req = { ...req, categoriesId: categoryId };
      }

      if (merchantListingStatus?.length) {
        req = {
          ...req,
          merchantListingStatus: {
            $in: merchantListingStatus,
          },
        };
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

  async findOne(option: FilterQuery<CompanyDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateCompanyInput) {
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
        initialLetter: slug[0],
      },
    });

    return 'Updated';
  }

  async toggleStatus(_id: ObjectId) {
    const model = await this.findOne({ _id });

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
        name: 'Company-Deleted',
        slug: `${model.slug}-deleted`,
        status: Status.INACTIVE,
        disabled: true,
      },
    });

    return 'Removed';
  }
}
