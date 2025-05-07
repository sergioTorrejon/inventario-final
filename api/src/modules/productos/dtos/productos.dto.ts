import {
  IsOptional,
  IsString,
} from 'class-validator';

export class NotificadosCreateDto {
  @IsString()
  tipoProducto: string;

  @IsString()
  marca: string;
  
  @IsString()  
  tamaño: string;  

  @IsString()
  modelo: string;  

  @IsString()
  unidadMedida: string;  

  @IsString()
  descripcion: string;
}


export class SearchDto {
  @IsString()
  @IsOptional()
  tipoProducto?: string;

  @IsString()
  @IsOptional()
  marca?: string;
  
  @IsString()
  @IsOptional()
  medida?: string;  

  @IsString()
  @IsOptional()
  modelo?: string;  

  @IsString()
  @IsOptional()
  unidad?: string;  

  @IsString()
  @IsOptional()
  descripcion?: string;
}