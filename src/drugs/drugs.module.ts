import { Module } from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { DrugsController } from './drugs.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Drug', schema: require('./schemas/drugs.schema').DrugSchema }])],
  controllers: [DrugsController],
  providers: [DrugsService],
})
export class DrugsModule {}
