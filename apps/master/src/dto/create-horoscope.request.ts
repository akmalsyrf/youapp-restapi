import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHoroscopeRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  startDate: string;

  @IsString()
  @IsNotEmpty()
  endDate: string;
}
