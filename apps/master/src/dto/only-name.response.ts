import { ApiResponseProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class OnlyNameResponse {
  @ApiResponseProperty()
  _id: Types.ObjectId;

  @IsString()
  @ApiResponseProperty()
  name: string;
}
