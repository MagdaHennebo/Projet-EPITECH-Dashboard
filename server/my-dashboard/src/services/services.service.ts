import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServicesDto } from './dto/create-services.dto';
import { UpdateServicesDto } from './dto/update-services.dto';
import { Services, ServicesDocument } from './schemas/services.schema';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Services.name) private readonly model: Model<ServicesDocument>,
  ) {}

  async findAll(): Promise<Services[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Services> {
    return await this.model.findById(id).exec();
  }

  async create(createServicesDto: CreateServicesDto): Promise<Services> {
    return await new this.model({
      ...createServicesDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateServicesDto: UpdateServicesDto,
  ): Promise<Services> {
    return await this.model.findByIdAndUpdate(id, updateServicesDto).exec();
  }

  async delete(id: string): Promise<Services> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
