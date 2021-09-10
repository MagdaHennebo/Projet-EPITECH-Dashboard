import { Module } from '@nestjs/common';
import { ParamsService } from './params.service';
import { ParamsController } from './params.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Params, ParamsSchema } from './schemas/params.schema';
@Module({
  providers: [ParamsService],
  controllers: [ParamsController],
  imports: [
    MongooseModule.forFeature([{ name: Params.name, schema: ParamsSchema }]),
  ],
})
export class ParamsModule {}
