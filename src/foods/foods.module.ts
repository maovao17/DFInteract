import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Food.name, schema: require('./schemas/food.schema').FoodSchema }])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
