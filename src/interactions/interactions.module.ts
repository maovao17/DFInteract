import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Interaction, InteractionSchema } from './schema/interactions.schema';
import { InteractionsService } from './interaction.service';
import { InteractionsController } from './interaction.controller';
import { Food, FoodSchema } from 'src/foods/schemas/food.schema';
import { Drug, DrugSchema } from 'src/drugs/schemas/drugs.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{name: Interaction.name, schema: InteractionSchema}]),
    MongooseModule.forFeature([{name: Food.name, schema: FoodSchema}]),
    MongooseModule.forFeature([{name: Drug.name, schema: DrugSchema}])
      
  ],
  controllers: [InteractionsController],
  providers: [InteractionsService],
  exports: [MongooseModule]
})
export class InteractionsModule {}