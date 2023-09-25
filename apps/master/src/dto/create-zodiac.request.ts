import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateZodiacRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
