import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsString()
  about: string;

  //@IsArray()
  //interest: string[];
}
