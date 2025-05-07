import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigService,
} from '@nestjs/config';
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  CartasResolucionesModule,
} from './modules/registros/registros.module';
import { CatalogosModule } from './modules/catalogos/catalogos.module';
import {
  NotificacionesModule,
} from './modules/registros-detalle/notificaciones.module';
import {
  NotificadosModule,
} from './modules/notificados/notificados.module';
import {
  SeguimientosModule,
} from './modules/seguimientos/seguimientos.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AuthModule } from './core/auth/auth.module';
import { TYPEORM_CONFIG } from './core/config/constants';
import databaseConfig from './core/config/database.config';
import { ProductosModule } from './modules/productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`, // .env.development
      validationSchema: Joi.object({ 
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development')
      }),
    }),
    AuthModule,
    CartasResolucionesModule,
    NotificacionesModule,
    NotificadosModule,
    CatalogosModule,
    UsuariosModule,
    SeguimientosModule,
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
