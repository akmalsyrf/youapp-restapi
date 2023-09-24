import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Account extends AbstractDocument {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  passwordHash: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
