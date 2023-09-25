import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  _id?: string;

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
  horoscopeId?: string;

  @ApiProperty()
  @IsString()
  ZodiacId?: string;
}
