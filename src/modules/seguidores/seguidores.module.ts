import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { SeguidoresController } from "./seguidores.controller";
import { seguidores, SeguidoresSchema } from "./schema/seguidores.schema";
import { SeguidoresService } from "./seguidores.service";

@Module({
    controllers:[SeguidoresController],
    providers:[SeguidoresService],
    imports:[
        MongooseModule.forFeature([
            {  
            name:seguidores.name,
            schema:SeguidoresSchema,
            },
        ]),
    ]
})

export class seguidoresModule{}

