/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  Req,
  
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductosService } from './productos.service';
import { JwtSupervisorRoleGuard } from 'src/core/auth/guards/jwt-supervisor-role.guard';
import { Auth, User } from 'src/common/decorators';
import { UserDto } from 'src/core/users/classes/user';
import { SortDto } from 'src/common/dtos';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';
import { SearchDto } from './dtos';


@ApiTags('PRODUCTOS')
//@Auth()
@Controller('productos')
export class ProductosController {
  constructor(
    private readonly service: ProductosService,
  ) {}

  //---------------GET DATA PAGINATE------------//
  //@UseGuards(JwtSupervisorRoleGuard)
/*   @Get()
  async GetData
  (@Query('descripcion') descripcion: string = ''){
    const data = this.service.getDataFilter(descripcion);
    return data;
  } */

  @Get()
  async getAll
  (@Query() paginationDto: PaginationDto,@Query() sortDto: SortDto, @Query() searchDto:SearchDto ) {
    const data =  await this.service.getAll(paginationDto,sortDto,searchDto);
    return data
  }


  //@UseGuards(JwtSupervisorRoleGuard)
  @Post()
  async createPost(@Req() request,@Body() dto: any) {
    console.log('Se  registran los siguiente datos', dto)
    //dto.usuario_creacion = request.user.username;
    const data = await this.service.createOne(dto);
    return { message: 'Registro creado', data };
  }

}
