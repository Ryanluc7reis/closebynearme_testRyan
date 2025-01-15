import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, ObjectId } from 'mongoose';
import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { Admin } from './admin.entity';
import { Roles } from '../../../_protos/common';

export type RecoverDocument = Recover & HydratedDocument<Recover>;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'recover',
})
export class Recover {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Admin.name })
  @IsNotEmpty()
  userId: ObjectId;

  @Prop({ required: true })
  @IsUUID('4')
  secureId: string;

  @Prop({ required: true, type: MongooseSchema.Types.Array })
  @IsEnum(Roles)
  profile: Roles[];

  @Prop({ default: new Date(), expires: 3600 })
  createdAt: Date;
}

export const RecoverSchema = SchemaFactory.createForClass(Recover);
