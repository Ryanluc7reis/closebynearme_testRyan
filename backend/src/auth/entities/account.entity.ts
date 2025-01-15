import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsJWT,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import {
  AccountSchemaAllowed,
  Provider,
  Scopes,
  SessionState,
} from '../../../_protos/common';

export type AccountDocument = Account & Document;

@Schema({ timestamps: false, versionKey: false })
export class Account {
  _id: string;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
  @IsMongoId()
  userId: ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.Array })
  @IsEnum(AccountSchemaAllowed)
  type: AccountSchemaAllowed[];

  @Prop({ required: true, type: typeof Provider })
  @IsEnum(Provider)
  provider: Provider;

  @Prop({ required: false, default: '' })
  @IsOptional()
  @IsJWT()
  refresh_token: string;

  @Prop({ required: true })
  @IsJWT()
  access_token: string;

  @Prop({ required: true })
  @IsDate()
  expires_at: Date;

  @Prop({ required: true, type: typeof Scopes })
  @IsArray()
  @IsEnum(Scopes)
  scope: Scopes[];

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
  @IsMongoId()
  id_token: ObjectId;

  @Prop({ required: true, type: typeof SessionState })
  @IsEnum(SessionState)
  session_state: SessionState;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
