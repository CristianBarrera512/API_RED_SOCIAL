import { Controller, Post, Body, Get, Param,Put,Delete, Query, Search, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { comentarioService } from "./comentarios.service"; 
import { CreatecomentarioDto } from "./dto/create-comentarios.dto"; 
import { SearchcomentarioDto } from "./dto/search-comentarios.dto";
import { UpdatecomentarioDto } from "./dto/update-comentarios.dto"; 


@ApiTags('Comentarios')
@Controller('Comentarios')

export class comentarioController{
    constructor(
        private readonly service:
        comentarioService,
    ){}

    @Post()
    create(
        @Body()
        dto:CreatecomentarioDto
    ){
        return this.service.create(dto);
    }

    @Get()
    finAll(
        @Query()
        search:SearchcomentarioDto
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
        dto:UpdatecomentarioDto,
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
        dto:UpdatecomentarioDto,
    ){
        return this.service.particalUpdate(id,dto);
    }
}