import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './entities/article.entity';
import { Status, StatusAllowed } from '_protos/common';
import { slugify } from 'libs/slug';
import { articlesFakeData, importArticlesFakeData } from 'libs/data-fake';
import { SearchArticleInput } from './dto/search-article.input';
import { ArticlesTypeAllowed } from '_protos/common/enums/tags.enum';

@Injectable()
export class ArticlesService implements OnModuleInit {
  constructor(
    @InjectModel(Article.name)
    private readonly model: PaginateModel<ArticleDocument>,
  ) {}

  async onModuleInit() {
    if (importArticlesFakeData) {
      for await (const data of articlesFakeData) {
        try {
          const documentId = await this.create(data);
          await this.toggleStatus(documentId._id);
        } catch (e) {}
      }
    }
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

    if (document) {
      throw new BadRequestException('Ya existe', 'Already exist');
    }
    return {
      slug,
      document,
      alreadyExist: !!document,
    };
  }

  async create(input: CreateArticleInput) {
    const { slug } = await this.slugValidator(input.title);

    const document = await new this.model({
      ...input,
      slug,
    }).save();

    return document;
  }

  async findAll(
    { all, page, perPage, q, status, type }: SearchArticleInput,
    locationId?: ObjectId,
    categoryId?: ObjectId,
  ) {
    const handleFilter = () => {
      let req: FilterQuery<ArticleDocument> = {
        disabled: false,
      };
      if (q !== '') {
        req = {
          ...req,
          $or: [
            { title: { $regex: new RegExp(q, 'gi') } },
            { description: { $regex: new RegExp(q, 'gi') } },
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
      if (type !== ArticlesTypeAllowed.EMPTY) {
        req = { ...req, type };
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

  async findOne(option: FilterQuery<ArticleDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateArticleInput) {
    const model = await this.findOne({ _id, disabled: false });
    let slug = model.slug;

    if (data.title !== model.title) {
      const item = await this.slugValidator(data.title);
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
        slug: `${model.slug}-deleted`,
        disabled: true,
        status: Status.INACTIVE,
      },
    });

    return 'Removed';
  }
}
