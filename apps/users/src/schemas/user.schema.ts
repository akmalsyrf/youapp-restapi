import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Users extends AbstractDocument {
  @Prop()
  accountId: string;

  @Prop()
  about: string;

  @Prop()
  interest: [string];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
