import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DrugDocument = Drug & Document;

@Schema()
export class Drug{
    @Prop({ required: true, unique: true })
    name: string;

    @Prop()
    description: string;

    @Prop([String])
    sideEffects: string[];
}

export const DrugSchema = SchemaFactory.createForClass(Drug);