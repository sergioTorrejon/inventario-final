import {
  IsOptional
} from 'class-validator';

import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class SettingsSearchDto {

  @ApiProperty()
  @IsOptional()
  codigo?: string;

  @ApiProperty()
  @IsOptional()
  descripcion?: string;

  @ApiProperty()
  @IsOptional()
  valor?: string;
  
}

export class SettingsCreateDto {
  
  @ApiProperty()
  @IsOptional()
  codigo?: string;

  @ApiProperty()
  @IsOptional()
  descripcion?: string;

  @ApiProperty()
  @IsOptional()
  valor?: string;

}

export class SettingsUpdateDto extends PartialType(
  OmitType(SettingsCreateDto, ["codigo"] as const),
) {}


