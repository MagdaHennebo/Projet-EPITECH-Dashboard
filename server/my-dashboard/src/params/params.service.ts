import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateParamsDto } from './dto/create-params.dto';
import { UpdateParamsDto } from './dto/update-params.dto';
import { Params, ParamsDocument } from './schemas/params.schema';

@Injectable()
export class ParamsService {
  constructor(
    @InjectModel(Params.name) private readonly model: Model<ParamsDocument>,
  ) {}

  async findAll(): Promise<Params[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Params> {
    return await this.model.findById(id).exec();
  }

  async create(createParamsDto: CreateParamsDto): Promise<Params> {
    return await new this.model({
      ...createParamsDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateParamsDto: UpdateParamsDto): Promise<Params> {
    return await this.model.findByIdAndUpdate(id, updateParamsDto).exec();
  }

  async delete(id: string): Promise<Params> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
