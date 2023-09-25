import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
}
