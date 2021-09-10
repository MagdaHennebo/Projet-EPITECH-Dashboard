import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWidgetsDto } from './dto/create-widgets.dto';
import { UpdateWidgetsDto } from './dto/update-widgets.dto';
import { WidgetsService } from './widgets.service';

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly service: WidgetsService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createWidgetsDto: CreateWidgetsDto) {
    return await this.service.create(createWidgetsDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWidgetsDto: UpdateWidgetsDto,
  ) {
    return await this.service.update(id, updateWidgetsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
