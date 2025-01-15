import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
import { InjectModel } from '@nestjs/mongoose';
import { Faq, FaqDocument } from './entities/faq.entity';
import { Status, StatusAllowed } from '_protos/common';
import { slugify } from 'libs/slug';
import { faqsFakeData, importFaqsFakeData } from 'libs/data-fake';

@Injectable()
export class FaqsService implements OnModuleInit {
  constructor(
    @InjectModel(Faq.name) private readonly model: PaginateModel<Faq>,
  ) {}

  async onModuleInit() {
    if (importFaqsFakeData) {
      for await (const data of faqsFakeData) {
        try {
          const documentId = await this.create(data);
          await this.toggleStatus(documentId._id);
        } catch (e) {}
      }
    }
  }

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

  async create(input: CreateFaqInput) {
    const slug = await this.slugValidator(input.question);

    const document = await new this.model({
      ...input,
      slug,
    }).save();

    return document;
  }

  async findAll(
    { all, page, perPage, q, status }: SearchBaseInput,
    locationId?: ObjectId,
    categoryId?: ObjectId,
  ) {
    const handleFilter = () => {
      let req: FilterQuery<FaqDocument> = {
        disabled: false,
      };
      if (q !== '') {
        req = {
          ...req,
          $or: [
            { question: { $regex: new RegExp(q, 'gi') } },
            { answer: { $regex: new RegExp(q, 'gi') } },
            { slug: { $regex: new RegExp(q, 'gi') } },
            { locationName: { $regex: new RegExp(q, 'gi') } },
            { categoryName: { $regex: new RegExp(q, 'gi') } },
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
        req = { ...req, categoryId };
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

  async findOne(option: FilterQuery<FaqDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateFaqInput) {
    const model = await this.findOne({ _id, disabled: false });
    let slug = model.slug;

    if (data.question !== model.question) {
      slug = await this.slugValidator(data.question);
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
        name: 'Faq-Deleted',
        slug: `${model.slug}-deleted`,
        status: Status.INACTIVE,
        disabled: true,
      },
    });

    return 'Removed';
  }
}
