import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWidgetsDto } from './dto/create-widgets.dto';
import { UpdateWidgetsDto } from './dto/update-widgets.dto';
import { Widgets, WidgetsDocument } from './schemas/widgets.schema';

@Injectable()
export class WidgetsService {
  constructor(
    @InjectModel(Widgets.name) private readonly model: Model<WidgetsDocument>,
  ) {}
  async findAll(): Promise<Widgets[]> {
    return await this.model
      .find()
      .populate('services')
      .populate('params')
      .populate('user')
      .exec();
  }

  async findOne(id: string): Promise<Widgets> {
    return await this.model
      .findById(id)
      .populate('services')
      .populate('params')
      .populate('user')
      .exec();
  }

  async create(createWidgetsDto: CreateWidgetsDto): Promise<Widgets> {
    return await new this.model({
      ...createWidgetsDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateWidgetsDto: UpdateWidgetsDto,
  ): Promise<Widgets> {
    return await this.model.findByIdAndUpdate(id, updateWidgetsDto).exec();
  }

  async delete(id: string): Promise<Widgets> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
