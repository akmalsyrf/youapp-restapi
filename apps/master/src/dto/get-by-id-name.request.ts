import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetByIdNameRequest {
  @ApiPropertyOptional()
  _id?: string;

  @ApiPropertyOptional()
  name?: string;
}
