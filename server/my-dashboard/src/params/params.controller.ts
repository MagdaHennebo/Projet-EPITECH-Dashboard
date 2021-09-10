import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateParamsDto } from './dto/create-params.dto';
import { UpdateParamsDto } from './dto/update-params.dto';
import { ParamsService } from './params.service';

@Controller('params')
export class ParamsController {
  constructor(private readonly service: ParamsService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createParamsDto: CreateParamsDto) {
    return await this.service.create(createParamsDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateParamsDto: UpdateParamsDto,
  ) {
    return await this.service.update(id, updateParamsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
