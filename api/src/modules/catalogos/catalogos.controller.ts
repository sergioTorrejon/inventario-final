/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CatalogosService } from './catalogos.service';

ApiTags('Catalogos')
@Controller('catalogos')
export class CatalogosController {
  constructor(
    private readonly catalogosService: CatalogosService,
  ) {}

  //@UseGuards(JwtConsultaRoleGuard)  
  @Get()
  async Get(@Query() dto: any) {
    const data = await this.catalogosService.getOptions();
    return { data };
  }
  
  //@UseGuards(JwtConsultaRoleGuard)  
  @Get('options')
  async getOption() {
    const data = await this.catalogosService.getOptions();
    return { data };
  }

}
