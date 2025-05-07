import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogos } from '../catalogos/entities';
import { Notificaciones } from '../registros-detalle/entities/notificaciones.entity';
import { NotificacionesService } from '../registros-detalle/notificaciones.service';
import { Seguimiento } from '../seguimientos/entities';
import { SeguimientosService } from '../seguimientos/seguimientos.service';
import { CartasResolucionesController } from './registros.controller';
import { CartasResolucionesService } from './registros.service';
import { CartasResoluciones } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([CartasResoluciones,Notificaciones,Catalogos,Seguimiento])],
  controllers: [CartasResolucionesController],
  providers: [CartasResolucionesService, NotificacionesService, SeguimientosService],
})
export class CartasResolucionesModule {}
