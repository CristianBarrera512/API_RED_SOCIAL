import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { ReaccionesController } from "./reacciones.controller";
import { Reacciones, ReaccionesSchema } from "./schema/reacciones.schema";
import { ReaccionesService } from "./reacciones.service";



@Module({
    controllers:[ReaccionesController],
    providers:[ReaccionesService],
    imports:[
        MongooseModule.forFeature([
            {  
            name:Reacciones.name,
            schema:ReaccionesSchema
            },
        ]),
    ]
})

export class ReaccionesModule{}

