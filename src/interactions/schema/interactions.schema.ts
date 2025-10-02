import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InteractionDocument = Interaction & Document;

@Schema()
export class Interaction{
    @Prop({ type: Types.ObjectId, ref: 'Drug', required: true })
    drugName: string;

    @Prop({ type: Types.ObjectId, ref: 'Food', required: true })
    foodName: string;

    @Prop()
    severity: string;

    @Prop()
    description: string;
}

export const InteractionSchema = SchemaFactory.createForClass(Interaction);