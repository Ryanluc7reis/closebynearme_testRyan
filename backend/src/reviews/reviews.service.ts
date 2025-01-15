import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './entities/review.entity';
import { Status, StatusAllowed } from '_protos/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name)
    private readonly model: PaginateModel<ReviewDocument>,
    private eventEmitter: EventEmitter2,
  ) {}

  //   @OnEvent(EventTypeName.ReviewsCount)
  //   async handleUpdateCompanyReviews({ payload, type }: EventPayload<ObjectId>) {
  //     if (type !== EventType.REVIEW) {
  //       throw new BadRequestException('Evento no valido', 'Event not valid');
  //     }

  //     const reviews = (
  //       await this.findAll(
  //         {
  //           all: true,
  //           page: 1,
  //           perPage: 10,
  //           q: '',
  //           status: StatusAllowed.ACTIVE,
  //         },
  //         payload,
  //       )
  //     ).docs;

  //     const ratingValue = _.meanBy(reviews, 'amount');
  //     const bestRating = _.find(reviews, { amount: 5 });

  //     return {
  //       bestRating: bestRating.amount.toString(),
  //       bestReviewAuthor: bestRating.fullName,
  //       ratingValue: ratingValue.toString(),
  //     };
  //   }

  async create(input: CreateReviewInput) {
    const data = await new this.model({
      ...input,
    }).save();

    // this.eventEmitter.emit(EventTypeName.CompanyReviewsCreate, {
    //   payload: data.companyId,
    //   type: EventType.COMPANIES,
    // });

    return data._id.toString();
  }

  async findAll(
    { all, page, perPage, q, status }: SearchBaseInput,
    companyId: ObjectId,
  ) {
    const handleFilter = () => {
      let req: FilterQuery<ReviewDocument> = {
        disabled: false,
      };
      if (q !== '') {
        req = {
          ...req,
          $or: [
            { fullName: { $regex: new RegExp(q, 'gi') } },
            { description: { $regex: new RegExp(q, 'gi') } },
          ],
        };
      }
      if (status !== StatusAllowed.EMPTY) {
        req = { ...req, status };
      }

      if (companyId) {
        req = { ...req, companyId };
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
      //   populate: populateFields,
    };

    return await this.model.paginate(handleFilter(), options);
  }

  async findOne(option: FilterQuery<ReviewDocument>, skipError = false) {
    const model = await this.model.findOne({
      ...option,
    });
    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async update({ _id, data }: UpdateReviewInput) {
    const model = await this.findOne({ _id, disabled: false });

    await model.updateOne({
      $set: {
        ...data,
      },
    });

    // this.eventEmitter.emit(EventTypeName.CompanyReviewsCreate, {
    //   payload: data.companyId,
    //   type: EventType.COMPANIES,
    // });
    return _id;
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
        fullName: 'Review-Deleted',
        status: Status.INACTIVE,
        disabled: true,
      },
    });

    return 'Removed';
  }
}
