import { BadRequestException, Injectable, NotFoundException, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ComentarioDocument, Comentarios } from "./schema/comentarios.schema"; 
import { Model } from "mongoose";
import { CreatecomentarioDto } from "./dto/create-comentarios.dto"; 
import { ResponseHelper } from "src/common/helpers/response.helper";
import { SearchcomentarioDto } from "./dto/search-comentarios.dto"; 
import { UpdatecomentarioDto } from "./dto/update-comentarios.dto"; 


@Injectable()
export class comentarioService{
    constructor(
        @InjectModel(Comentarios.name)
        private readonly comentarioModel:
        Model<ComentarioDocument>
    ){}
    /**
     * Metodo para creacion de comentario
     */

    async create(dto:CreatecomentarioDto){
         
    const Comentario =await this.comentarioModel.create(dto);

        return ResponseHelper.success(Comentario,201);
    }

    /**
     * Consultar un usuario
     */


    async findAll(search:SearchcomentarioDto){

        const filter: any = {activo:true};

        if(search.comentario){
            filter.comentario={
                $regex:search.comentario, 
                $options:'i'
            };
        }

        const page = Number(search.page) || 1;
        const limit = Number (search.limit) || 10;

        //Consulta

        const data = await this.comentarioModel.find(filter).populate('User_id').populate('publicacion_id').skip((page - 1) * limit).limit(limit);       
         //contador de documentos = contador de usuarios
        const total = await this.comentarioModel.countDocuments(filter);


        return ResponseHelper.success({total, page, limit, data});
    }

    /**
     * Consultar por id de comentario
     */

    async findOne(id:string){
        const comentario = await this.comentarioModel.findById(id).populate('User_id').populate('publicacion_id');

        if(!comentario){
        throw new NotFoundException('comentario no encontrado')
        }

        return ResponseHelper.success({comentario})
    }
    /**
     * Actualizacion de horario
     */
    async update(id:string, dto:UpdatecomentarioDto,){
        
        const comentario = await this.comentarioModel.findById(id)

            if(!comentario){
            throw new NotFoundException('no se encontro el comentario')
            }
        
        const updatecomentario = await this.comentarioModel.findByIdAndUpdate(id,dto,{new:true})
    
        return ResponseHelper.success(updatecomentario)
    }

    async remove(id:string){
        const comentario = await this.comentarioModel.findById(id)

        if(!comentario){
            throw new NotFoundException('usuario no encontrado')
        }
        const deletecomentario = await this.comentarioModel.findByIdAndUpdate(id,{activo:false},{new:true})
        
        return ResponseHelper.success(deletecomentario)

    }

    async particalUpdate(id:string,dto:UpdatecomentarioDto){
    const role = await this.comentarioModel.findById(id);

        if(!role){
        throw new NotFoundException('Role no encontrado');
        }

        const updatedRole = await this.comentarioModel.findByIdAndUpdate(id,{$set:dto,},{new:true});

        return ResponseHelper.success(updatedRole,);
    }

}