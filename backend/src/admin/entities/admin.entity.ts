import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Length,
  IsEmail,
  ArrayNotEmpty,
  IsEnum,
  IsDate,
  IsBoolean,
  IsString,
} from 'class-validator';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { PermissionsMenu, Roles, Status } from '../../../_protos/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';
export type AdminDocument = Admin & Document<Admin>;

@ObjectType()
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Admin {
  @Field(() => ID)
  _id: ObjectId;

  @Field()
  @Prop({ required: true, unique: true, trim: true })
  @IsEmail()
  email: string;

  @Field()
  @Prop({ required: true, trim: true })
  @IsString()
  fullName: string;

  @Field(() => String, { defaultValue: '' })
  @Prop({ required: false, default: '' })
  @IsString()
  avatar: string;

  @Prop({ required: true, trim: true })
  @Length(8, 32)
  password: string;

  @Field(() => Status)
  @Prop({ required: true, default: Status.ACTIVE, type: typeof Status })
  @IsEnum(Status)
  status: Status;

  @Prop({ default: false })
  @IsBoolean()
  disabled: boolean;

  @Prop({ default: false })
  @IsBoolean()
  fullRecord: boolean;

  @Field(() => [PermissionsMenu])
  @Prop({ required: true })
  @IsEnum(PermissionsMenu)
  @ArrayNotEmpty()
  permissions: PermissionsMenu[];

  @Field(() => [Roles])
  @Prop({ required: true, type: MongooseSchema.Types.Array })
  @IsEnum(Roles)
  profile: [Roles.ADMIN];

  @Field(() => String, {
    defaultValue: 'admin',
  })
  @Prop({ required: true, default: 'admin' })
  @IsEnum(Roles)
  role: string;

  @Field(() => Date)
  @IsDate()
  createdAt: Date;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
