import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOnlyNameRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
