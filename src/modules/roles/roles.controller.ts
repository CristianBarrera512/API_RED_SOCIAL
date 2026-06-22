import { Controller, Post, Body, Get, Param,Put,Patch,Delete} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesModule } from './roles.module';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
    constructor(
        private readonly service:
        RolesService,
    ){}
    /**
     * Crear rol
      */
    @Post()
    create(
        @Body()
        dto: CreateRoleDto
    ){
        return this.service.create(
            dto,
        );
    }
    /**
     * Consultar roles
     */
    @Get()
    findAll(){
        return this.service.findAll();
    }
    /**
     * Bucar Rol por id
     */
    /**
     * Consultar Roles inativo
     */
    @Get('inactivos')
    findInactive(){
        return this.service.findInactive();
    }

    @Get(':id')
    findOne(
        @Param('id')
        id:string,
    ){
        return this.service.findOne(id,);
    }
    /**
     * Actulizar Rol
     */
    @Put(':id')
    update(
        @Param('id')
        id:string,

        @Body()
        dto:UpdateRoleDto,
    ){
        return this.service.update(id,dto);
    }
    /**
     * Actulizacion parcial
     */
    @Patch(':id')
    partidalUpdate(
        @Param('id')
        id:string,

        @Body()
        dto:UpdateRoleDto,
    ){
        return this.service.particalUpdate(id,dto);
    }
    /**
     * Restaurar rol eliminado
     */

    @Patch(':id/restaurar')
    restore(
        @Param('id')
        id:string,
    ){
        return this.service.restore(id);
    }
    
    @Delete(':id')
    remove(
        @Param('id')
        id:string,

    ){
        return this.service.remove(id);
    }

}
