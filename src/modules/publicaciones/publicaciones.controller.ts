import { Controller, Post, Body, Get, Param,Put,Delete, Query, Search } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreatePublicacionesDto } from "./dto/create-publicaciones.dto";
import { SearchPublicacionesDto } from "./dto/search-publicaciones.dto";
import { UpdatePublicacionesDto } from "./dto/update-publicaciones.dto";
import { PublicacionesService } from "./publicaciones.service";


@ApiTags('Publicaciones')
@Controller('Publicaiones')

export class PublicaionesController{
    constructor(
        private readonly service:
        PublicacionesService,
    ){}

    @Post()
    create(
        @Body()
        dto:CreatePublicacionesDto
    ){
        return this.service.create(dto);
    }

    @Get()
    finAll(
        @Query()
        search:SearchPublicacionesDto
    ){
        return this.service.findAll(search);
    }

    @Get(':id')
    findOne(
        @Param('id')
        id:string
    ){
        return this.service.findOne(id);
        
    }
    @Put(':id')
    update(
        @Param('id')
        id:string,

        @Body()
        dto:UpdatePublicacionesDto
    ){
        return this.service.update(id,dto);
    }

    @Delete(':id')
    remove(
        @Param('id')
        id:string,
    ){
        return this.service.remove(id);
    }
}