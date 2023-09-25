import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Zodiac extends AbstractDocument {
  @Prop()
  name: string;
}

export const ZodiacSchema = SchemaFactory.createForClass(Zodiac);
