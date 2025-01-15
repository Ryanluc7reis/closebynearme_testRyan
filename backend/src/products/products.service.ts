import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { Status, StatusAllowed } from '_protos/common';
import { slugify } from 'libs/slug';
import { SearchProductInput } from './dto/search-product.input';
import { CreateAmenitiesInput } from './dto/create-amenities.input';
import { Amenities, AmenitiesDocument } from './entities/amenities.entity';
import { UpdateAmenitiesInput } from './dto/update-amenities.input';
import { SearchBaseInput } from '_protos/classes/search.base';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly model: PaginateModel<ProductDocument>,
    @InjectModel(Amenities.name)
    private readonly amenitiesModel: PaginateModel<AmenitiesDocument>,
  ) {}

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

  async create(input: CreateProductInput) {
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

  async getAmenities(input: ObjectId[]) {
    return await this.amenitiesModel.find({ _id: { $in: input } });
  }

  async findAmenitiesAll({ all, page, perPage, q }: SearchBaseInput) {
    const handleFilter = () => {
      let req: FilterQuery<ProductDocument> = {};

      if (q !== '') {
        const regex = { $regex: new RegExp(q, 'gi') };

        req = {
          ...req,
          $or: [
            {
              name: regex,
            },
            {
              description: regex,
            },
          ],
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

    return await this.amenitiesModel.paginate(handleFilter(), options);
  }

  async createAmenities(input: CreateAmenitiesInput) {
    return await new this.amenitiesModel({ ...input }).save();
  }

  async updateAmenities({ _id, data }: UpdateAmenitiesInput) {
    const model = await this.amenitiesModel.findOne({ _id });

    await model.updateOne({
      $set: {
        ...data,
      },
    });

    return 'Updated';
  }

  async findAll({
    all,
    page,
    perPage,
    q,
    status,
    companyId,
    categoriesId,
    locationId,
  }: SearchProductInput) {
    const handleFilter = () => {
      let req: FilterQuery<ProductDocument> = {
        disabled: false,
      };

      if (q !== '') {
        const regex = { $regex: new RegExp(q, 'gi') };

        req = {
          ...req,
          $or: [
            {
              name: regex,
              slug: regex,
            },
          ],
        };
      }

      if (status !== StatusAllowed.EMPTY) {
        req = { ...req, status };
      }

      if (companyId) {
        req = { ...req, companyId };
      }

      if (categoriesId?.length) {
        console.log(categoriesId);
        req = { ...req, categoryId: { $in: categoriesId } };
      }

      if (locationId) {
        req = { ...req, locationId };
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

  async findByFilterAll(
    {
      all,
      page,
      perPage,
      q,
      status,
      companyId,
      categoriesId,
    }: SearchProductInput,
    slug?: string,
  ) {
    const handleFilter = () => {
      let req: FilterQuery<ProductDocument> = {
        disabled: false,
      };

      if (q !== '') {
        const regex = { $regex: new RegExp(q, 'gi') };

        req = {
          ...req,
          $or: [
            {
              name: regex,
              slug: regex,
            },
          ],
        };
      }

      if (status !== StatusAllowed.EMPTY) {
        req = { ...req, status };
      }

      if (companyId) {
        req = { ...req, companyId };
      }

      if (categoriesId?.length) {
        req = { ...req, categoryId: { $in: categoriesId } };
      }
      if (slug) {
        req = { ...req, slug: { $ne: slug } };
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

  async findOne(option: FilterQuery<ProductDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateProductInput) {
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
        name: 'Product-Deleted',
        slug: `${model.slug}-deleted`,
        disabled: true,
        status: Status.INACTIVE,
      },
    });

    return 'Removed';
  }
}
