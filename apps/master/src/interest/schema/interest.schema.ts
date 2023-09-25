import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Interest extends AbstractDocument {
  @Prop()
  name: string;
}

export const InterestSchema = SchemaFactory.createForClass(Interest);
