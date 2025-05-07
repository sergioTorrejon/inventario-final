import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class PaginationDto {
 
  @IsOptional()
  @IsString()
  page?: string='1';

  @IsOptional()
  @IsString()
  limit?: string='10';

}
