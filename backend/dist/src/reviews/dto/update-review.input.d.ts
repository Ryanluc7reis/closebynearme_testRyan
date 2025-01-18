import { CreateReviewInput } from './create-review.input';
import { ObjectId } from 'mongodb';
declare const UpdateReviewData_base: import("@nestjs/common").Type<Partial<CreateReviewInput>>;
export declare class UpdateReviewData extends UpdateReviewData_base {
}
export declare class UpdateReviewInput {
    _id: ObjectId;
    data: UpdateReviewData;
}
export {};
