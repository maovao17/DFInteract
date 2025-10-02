import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';
import { Model } from 'mongoose';

@Injectable()
export class FoodsService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}

  addFood(data: any){
    const newFood = new this.foodModel(data);
    return newFood.save();
  }

  getAllFoods(){
    return this.foodModel.find().exec();
  }

  getFoodByName(name: string){
    return this.foodModel.findOne({ name } ).exec();
  }     
}
