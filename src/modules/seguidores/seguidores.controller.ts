import { Controller, Post, Body, Get, Param,Put,Delete, Query, Search, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateSeguidoreDto } from "./dto/create-seguidores.dto";
import { SearchSeguidoreDto } from "./dto/search-seguidores.dto";
import { UpdateSeguidoresDto } from "./dto/update-seguidores.dto";
import { SeguidoresService } from "./seguidores.service";



@ApiTags('Seguidores')
@Controller('Seguidores')

export class SeguidoresController{
    constructor(
        private readonly service:
        SeguidoresService,
    ){}

    @Post()
    create(
        @Body()
        dto:CreateSeguidoreDto
    ){
        return this.service.create(dto);
    }

    @Get()
    finAll(
        @Query()
        search:SearchSeguidoreDto
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
        dto:UpdateSeguidoresDto
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
     @Patch(':id')
    partidalUpdate(
        @Param('id')
        id:string,

        @Body()
        dto:UpdateSeguidoresDto,
    ){
        return this.service.particalUpdate(id,dto);
    }
}