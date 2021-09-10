import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Services } from '../../services/schemas/services.schema';
import { Params } from '../../params/schemas/params.schema';
import { User } from '../../user/schemas/user.schema';

export type WidgetsDocument = Widgets & Document;

@Schema()
export class Widgets {
  @Prop({ required: true })
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Services' })
  services: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Params' })
  params: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}

export const WidgetsSchema = SchemaFactory.createForClass(Widgets);
