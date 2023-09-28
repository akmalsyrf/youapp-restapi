import { ApiResponseProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateUpdateUserResponse } from './create-update-user.response';

class AccountResponse {
  @IsString()
  @IsNotEmpty()
  @ApiResponseProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiResponseProperty()
  email: string;
}

export class GetUserResponse {
  @IsNotEmpty()
  @ApiResponseProperty()
  account: AccountResponse;

  @IsNotEmpty()
  @IsArray()
  @ApiResponseProperty({ type: () => [CreateUpdateUserResponse] })
  profile: CreateUpdateUserResponse[];
}
