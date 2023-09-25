import { ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthResponse {
  @IsString()
  @IsNotEmpty()
  @ApiResponseProperty()
  accessToken: string;

  @IsString()
  @IsNotEmpty()
  @ApiResponseProperty()
  expiresIn: Date;
}
