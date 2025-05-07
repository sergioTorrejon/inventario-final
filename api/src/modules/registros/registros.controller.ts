import * as fs from 'fs';
import { User } from 'src/common/decorators';
import { ReadDto } from 'src/common/decorators/readDto.decorator';
import { csvBuild } from 'src/common/libs/csv/csv-create';
import { pdfBuild } from 'src/common/libs/pdf/pdf-create';
import {
  JwtAdministradorRoleGuard,
} from 'src/core/auth/guards/jwt-administrador-role.guard';
import {
  JwtConsultaRoleGuard,
} from 'src/core/auth/guards/jwt-consulta-role.guard';
import {
  JwtOperadorRoleGuard,
} from 'src/core/auth/guards/jwt-operador-role.guard';
import {
  JwtSupervisorRoleGuard,
} from 'src/core/auth/guards/jwt-supervisor-role.guard';

/* eslint-disable @typescript-eslint/camelcase */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { CartasResolucionesService } from './registros.service';
import {
  CartasResolucionesCreateDto,
  CartasResolucionesSearchDto,
} from './dtos';

@ApiTags('CartasResoluciones')
@Controller('cartas_resoluciones')
export class CartasResolucionesController {
  constructor(
    private readonly service: CartasResolucionesService,
 ) {}

//#region CRUD
  //---------------GET DATA PAGINATE------------//
  @Get()
  @UseGuards(JwtConsultaRoleGuard) 
  async getDataPaginate(@User() _user,@Query() dto: CartasResolucionesSearchDto){
    return await this.service.getDataPaginate(dto) 
  }

  @Get('admin/data')
  @UseGuards(JwtAdministradorRoleGuard) 
  async getAdminDataPaginate(@User() _user,@Query() dto: CartasResolucionesSearchDto){
      return await this.service.getAdminData(dto) 
  }

  @Post()
  @UseGuards(JwtOperadorRoleGuard)   
  @UseInterceptors(FileInterceptor('file'))
  async createPost(@User() _user,@UploadedFile() file, @ReadDto() dto:CartasResolucionesCreateDto) {//arreglar modelo
      return await this.service.create(dto,file); 
  }

  @Put(':id')
  @UseGuards(JwtOperadorRoleGuard)  
  @UseInterceptors(FileInterceptor('file'))
  async editOne(@Req() request,
    @UploadedFile() file,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto,
  ) {
    console.log('dto', dto)
    dto.usuario_modificacion = request.user.username;
    return this.service.update(id,dto,file)
  }  


  @Put('refuse/:id')
  @UseGuards(JwtSupervisorRoleGuard)  
  async refuseOne(@Req() request,
  @Param('id', ParseIntPipe) id: number,
  @Body() dto,
  ) {
    const refuse = await this.service.getById(id);
    refuse.usuario_modificacion = request.user.username;
    const data = await this.service.refuse(refuse, dto.observaciones);
    return { message: 'Documento editado', data };//ARREGLAR
  } 

  @Put('checker/:id')
  @UseGuards(JwtSupervisorRoleGuard)  
  async checkerOne(@Req() request,
  @Param('id', ParseIntPipe) id: number,
  @Body() dto,
  ) {
    console.log('paso1')
    await this.service.editOne(id,dto);
    console.log('paso2')
    const checker = await this.service.getById(id);
    console.log('paso3')
    checker.usuario_modificacion = request.user.username;
    console.log('paso4')
    const data = await this.service.checker(checker);
    console.log('paso5')
    return { message: 'Documento aprobado', data };//ARREGLAR
  } 

  @Delete(':id')
  @UseGuards(JwtOperadorRoleGuard)  
  async deleteOne(@Req() request,@Param('id', ParseIntPipe) id: number) {
    const user= request.user.username;
    const data = await this.service.deleteOne(id,user);
    return { message: process.env.MESSAGE_DELETE_ONE+" Nro: "+data.id, data };
  }

//#endregion

  //#region REPORTS
  //---------------REPORTS------------//
  @Get('downloadcsv/')
  @UseGuards(JwtConsultaRoleGuard)  
  async getReportData(@User() _user,@Query() dto: CartasResolucionesSearchDto, @Res() res) {
    const data = await this.service.getDataReport(dto);
    const csv = await csvBuild(data);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `inline; filename=Reporte.xlsx`);
    return res.send(csv);
  }

  //---------------GET ONE FILE FOR VIEW AND DOWNLOAD ------------//
  @Get('downloadpdf/')
  @UseGuards(JwtConsultaRoleGuard)  
  async getReportDataPdf(@User() _user,@Query() dto: CartasResolucionesSearchDto, @Res() res) {
    const data = await this.service.getDataReport(dto)
    const pdf = await pdfBuild(data)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `inline; filename=reporte.pdf`)
    return res.send(pdf)
  }

  //---------------GET ONE FILE FOR VIEW AND DOWNLOAD ------------//  
  @Get('download/:id')
  @UseGuards(JwtConsultaRoleGuard)  
  async getFile(@Param('id', ParseIntPipe) id: number,@Res() res) {
      const data = await this.service.getById(id);
      const pathFolder = data.rc_tipo=='RA'?process.env.PATH_REPOSITORY_RESOLUCIONES:process.env.PATH_REPOSITORY_CIRCULARES;
      if
      (!fs.existsSync(pathFolder+ data.rc_filename)){
        return res.sendFile(process.env.PATH_REPOSITORY_ERROR);
      }
      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', `inline; filename=${data.rc_filename}.pdf`)
      return res.sendFile(pathFolder+ data.rc_filename);
  } 

  @Get('descarga/:id')
  //@UseGuards(JwtConsultaRoleGuard)  
  async getFileWeb(@Param('id', ParseIntPipe) id: number,@Res() res) {
      const data = await this.service.getById(id);
      const pathFolder = data.rc_tipo=='RA'?process.env.PATH_REPOSITORY_RESOLUCIONES:process.env.PATH_REPOSITORY_CIRCULARES;
      if (!data.rc_publicar_web)
      {
        return res.sendFile(process.env.PATH_REPOSITORY_ERROR);
      }
      if
      (!fs.existsSync(pathFolder+ data.rc_filename)){
        return res.sendFile(process.env.PATH_REPOSITORY_ERROR);
      }
      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', `inline; filename=${data.rc_filename}.pdf`)
      return res.sendFile(pathFolder+ data.rc_filename);
  }  

  @Get('manual')
  //@UseGuards(JwtConsultaRoleGuard)  
  async getManualWeb(@Res() res) {
      res.setHeader('Content-Type', 'application/pdf')
      res.setHeader('Content-Disposition', `inline; filename=manunal-usuario-sireci.pdf`);
      return res.sendFile(process.env.PATH_REPOSITORY_INFO);
  }  
//#endregion
}
