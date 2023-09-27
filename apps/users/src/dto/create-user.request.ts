import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @ApiProperty()
  @IsString()
  about: string;

  @ApiProperty()
  interest: [string];

  @ApiProperty()
  @IsString()
  birthday?: string;

  @ApiProperty()
  @IsNumber()
  heightCm?: number;

  @ApiProperty()
  @IsNumber()
  weightKg?: number;

  @ApiProperty()
  @IsString()
  horoscope?: string;

  @ApiProperty()
  @IsString()
  zodiac?: string;
}
