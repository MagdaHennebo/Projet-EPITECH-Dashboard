import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParamsDocument = Params & Document;

@Schema()
export class Params {
  @Prop()
  id: string;

  @Prop()
  value: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}

export const ParamsSchema = SchemaFactory.createForClass(Params);
