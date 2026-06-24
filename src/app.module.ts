import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from './modules/roles/roles.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ComentarioModule } from './modules/comentarios/comentarios.module';
import { publicacionesModule } from './modules/publicaciones/publicaciones.module';
import { ReaccionesModule } from './modules/reacciones/reacciones.module';
import { seguidoresModule } from './modules/seguidores/seguidores.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RolesModule,
    UsuariosModule,
    ComentarioModule,
    publicacionesModule,
    ReaccionesModule,
    seguidoresModule,
    MongooseModule.forRoot(process.env.MONGO_URI as string),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
