import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Horoscope extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

export const HoroscopeSchema = SchemaFactory.createForClass(Horoscope);
