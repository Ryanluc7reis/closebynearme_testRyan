import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsEnum, IsMongoId, IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { AccountSchemaAllowed } from '../../../_protos/common';

export type SessionDocument = Session & Document;

@Schema({ timestamps: false, versionKey: false })
export class Session {
  _id: string;

  @Prop({ default: randomUUID() })
  @IsUUID()
  sessionToken: string;

  @Prop({ required: true, type: MongooseSchema.Types.Array })
  @IsEnum(AccountSchemaAllowed)
  role: AccountSchemaAllowed[];

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
  @IsMongoId()
  userId: ObjectId | string;

  @Prop({ required: true })
  @IsDate()
  timestamp: Date;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
