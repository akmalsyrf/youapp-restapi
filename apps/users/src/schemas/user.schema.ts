import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Users extends AbstractDocument {
  @Prop()
  accountId: string;

  @Prop()
  about: string;

  @Prop()
  interest: [string]; // list of interest id

  @Prop()
  birthday?: string;

  @Prop()
  heightCm?: number;

  @Prop()
  weightKg?: number;

  @Prop()
  horoscopeId?: string;

  @Prop()
  ZodiacId?: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
