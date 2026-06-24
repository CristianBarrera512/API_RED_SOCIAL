import { MongooseModule } from "@nestjs/mongoose";
import { Comentarios, comentarioSchema } from "./schema/comentarios.schema"; 
import { Module } from '@nestjs/common';
import { comentarioController } from "./comentarios.controller"; 
import { comentarioService } from "./comentarios.service";


@Module({
    controllers:[comentarioController],
    providers:[comentarioService],
    imports:[
        MongooseModule.forFeature([
            {  
            name:Comentarios.name,
            schema:comentarioSchema
            },
        ]),
    ]
})

export class ComentarioModule{}