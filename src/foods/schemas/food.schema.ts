import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Food & Document;

@Schema()
export class Food{
    @Prop({ required: true, unique: true })
    name: string;

    @Prop()
    category: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);