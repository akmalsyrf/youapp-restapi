import { IsNotEmpty, IsString } from 'class-validator';

export class CreateZodiacRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}
