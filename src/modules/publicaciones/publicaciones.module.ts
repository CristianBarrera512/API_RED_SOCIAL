import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { publicaciones, PublicacionesSchema } from "./schema/publicaciones.schema";
import { PublicaionesController } from "./publicaciones.controller";
import { PublicacionesService } from "./publicaciones.service";


@Module({
    controllers:[PublicaionesController],
    providers:[PublicacionesService],
    imports:[
        MongooseModule.forFeature([
            {  
            name:publicaciones.name,
            schema:PublicacionesSchema,
            },
        ]),
    ]
})

export class publicacionesModule{}

