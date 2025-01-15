import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { SearchBaseInput } from '_protos/classes/search.base';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { Status, StatusAllowed } from '_protos/common';
import { slugify } from 'libs/slug';
import { transformToJSON } from 'libs/transformArrayToJson';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventTypeName } from '_protos/common/enums/event.enum';
import { EventType } from '_protos/common/dto/event.listener.dto';
import { IUploadCSVObject } from '_protos/common/interfaces';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly model: PaginateModel<CategoryDocument>,
    private eventEmitter: EventEmitter2,
  ) {}

  async slugValidator(name: string) {
    const slug = slugify(name);

    const exist = await this.findOne(
      {
        slug,
        disabled: false,
      },
      true,
    );

    if (exist) {
      throw new BadRequestException('Ya existe', 'Already exist');
    }
    return slug;
  }

  async create(input: CreateCategoryInput) {
    const slug = await this.slugValidator(input.name);

    const document = await new this.model({
      ...input,
      slug,
    }).save();

    return document._id.toString();
  }

  async findAll({ all, page, perPage, q, status }: SearchBaseInput) {
    const handleFilter = () => {
      let req: FilterQuery<CategoryDocument> = {
        disabled: false,
      };
      if (q !== '') {
        req = {
          ...req,
          $or: [
            { name: { $regex: new RegExp(q, 'gi') } },
            { slug: { $regex: new RegExp(q, 'gi') } },
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
        createdAt: -1,
      },
    };

    return await this.model.paginate(handleFilter(), options);
  }

  async findOne(option: FilterQuery<CategoryDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateCategoryInput) {
    const model = await this.findOne({ _id, disabled: false });
    let slug = model.slug;

    if (data.name !== model.name) {
      slug = await this.slugValidator(data.name);
    }

    await model.updateOne({
      $set: {
        ...data,
        slug,
      },
    });

    if (data.name !== model.name) {
      await this.eventEmitter.emitAsync(EventTypeName.CategoryNameUpdated, {
        payload: {
          categoryId: model._id,
          categories: await this.model
            .find({
              disabled: false,
              status: Status.ACTIVE,
            })
            .select('_id name slug'),
        },
      });
    }

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
        name: 'Category-Deleted',
        slug: `${model.slug}-deleted`,
        disabled: true,
        status: Status.INACTIVE,
      },
    });

    return 'Removed';
  }

  async processCategoryUpdate() {}

  async processCsv(file: any, _id: ObjectId) {
    const model = await this.findOne({ _id, disabled: false });

    const data = (await transformToJSON(
      file.buffer,
    )) as unknown as IUploadCSVObject[];

    const [locations] = await this.eventEmitter.emitAsync(
      EventTypeName.LocationDataUpload,
      {
        type: EventType.LOCATIONS,
        payload: {
          data,
          categoriesId: [model._id],
          categories: [
            {
              name: model.name,
              slug: model.slug,
            },
          ],
        },
      },
    );
    await this.eventEmitter.emitAsync(EventTypeName.CompanyUploadCreate, {
      type: EventType.COMPANIES,
      payload: {
        data,
        locations,
        categoriesId: [model._id],
        categories: [
          {
            name: model.name,
            slug: model.slug,
          },
        ],
      },
    });

    await model.updateOne({
      status: Status.ACTIVE,
    });

    return 'Success';
  }
}
