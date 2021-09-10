import { Module } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Widgets, WidgetsSchema } from './schemas/widgets.schema';

@Module({
  providers: [WidgetsService],
  controllers: [WidgetsController],
  imports: [
    MongooseModule.forFeature([{ name: Widgets.name, schema: WidgetsSchema }]),
  ],
})
export class WidgetsModule {}
