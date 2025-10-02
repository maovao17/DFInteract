import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Interaction, InteractionDocument } from './schema/interactions.schema';
import { Drug, DrugDocument } from '../drugs/schemas/drugs.schema';
import { Food, FoodDocument } from '../foods/schemas/food.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class InteractionsService {
  constructor(
    @InjectModel(Interaction.name) private interactionModel: Model<InteractionDocument>,
    @InjectModel(Drug.name) private drugModel: Model<DrugDocument>,
    @InjectModel(Food.name) private foodModel: Model<FoodDocument>,
  ) {}

  async addInteraction(data: {
    drug: string; 
    food: string; 
    severity: string;
    description?: string;
  }) {
    const drug = await this.drugModel.findOne({ name: new RegExp(`^${data.drug}$`, 'i') });
    const food = await this.foodModel.findOne({ name: new RegExp(`^${data.drug}$`, 'i') });
    if (!drug || !food) throw new Error('Drug or Food not found');

    const interaction = new this.interactionModel({
      drug: drug._id,
      food: food._id,
      severity: data.severity,
      description: data.description,
    });

    return interaction.save();
  }

  async getAllInteractions() {
    return this.interactionModel.find().populate('drug').populate('food').exec();
  }

  async getByDrugName(drugName: string) {
    const drug = await this.drugModel.findOne({ name: drugName });
    if (!drug){
      throw new NotFoundException(`Drug "${drugName}" not found`);
    };

    return this.interactionModel
      .find({ drug: drug._id })
      .populate('drug')
      .populate('food')
      .exec();
  }

  async getByFoodName(foodName: string) {
    const food = await this.foodModel.findOne({ name: foodName });
    if (!food){
      throw new NotFoundException(`Food "${foodName}" not found`);
    }

    return this.interactionModel
      .find({ food: food._id })
      .populate('drug')
      .populate('food')
      .exec();
  }
}
