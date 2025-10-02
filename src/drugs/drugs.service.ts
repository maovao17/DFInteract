import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drug } from './schemas/drugs.schema';

@Injectable()
export class DrugsService {
  constructor(@InjectModel(Drug.name) private drugModel: Model<Drug>) {}

  addDrug(data: any) {
    const newDrug = new this.drugModel(data);
    return newDrug.save();
  }

  getAllDrugs() {
    return this.drugModel.find().exec();
  }

  getDrugByName(name: string) {
    return this.drugModel.findOne({ name }).exec();
  }
}
