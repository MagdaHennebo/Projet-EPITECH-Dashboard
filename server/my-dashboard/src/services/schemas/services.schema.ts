import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type ServicesDocument = Services & Document;

@Schema()
export class Services {
  @Prop()
  _id: string;

  @Prop()
  serviceName: string;

  @Prop()
  url: string;

  @Prop()
  nbParam: string;

  @Prop()
  updateddAt?: Date;

  @Prop()
  createdAt: Date;
}

export const ServicesSchema = SchemaFactory.createForClass(Services);
