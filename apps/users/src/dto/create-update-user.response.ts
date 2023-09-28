import { ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateUpdateUserResponse {
  @ApiResponseProperty({ type: () => Types.ObjectId })
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  @ApiResponseProperty()
  accountId: string;

  @IsString()
  @ApiResponseProperty()
  about: string;

  @ApiResponseProperty()
  interest: [string];

  @IsString()
  @ApiResponseProperty()
  birthday?: string;

  @IsNumber()
  @ApiResponseProperty()
  heightCm?: number;

  @IsNumber()
  @ApiResponseProperty()
  weightKg?: number;

  @IsString()
  @ApiResponseProperty()
  horoscope?: string;

  @IsString()
  @ApiResponseProperty()
  zodiac?: string;
}
