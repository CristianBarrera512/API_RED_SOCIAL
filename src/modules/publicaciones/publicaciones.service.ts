import { BadRequestException, Injectable, NotFoundException, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { ResponseHelper } from "src/common/helpers/response.helper";
import { publicaciones, PublicacionesDocument } from "./schema/publicaciones.schema";
import { CreatePublicacionesDto } from "./dto/create-publicaciones.dto";
import { SearchPublicacionesDto } from "./dto/search-publicaciones.dto";
import { UpdatePublicacionesDto } from "./dto/update-publicaciones.dto";



@Injectable()
export class PublicacionesService{
    constructor(
        @InjectModel(publicaciones.name)
        private readonly publicacionesModel:
        Model<PublicacionesDocument>
    ){}
    /**
     * Metodo para creacion de comentario
     */

    async create(dto:CreatePublicacionesDto){

     const publi = await this.publicacionesModel.create(dto);

    return ResponseHelper.success(publi,201);
    }

    /**
     * Consultar un usuario
     */


    async findAll(search:SearchPublicacionesDto){

        const filter: any = {activo:true};

        if(search.contenido){
            filter.contenido={
                $regex:search.contenido,
                $options:'i'
            };
        }

        const page = Number(search.page) || 1;
        const limit = Number (search.limit) || 10;

        //Consulta

        const data = await this.publicacionesModel.find(filter).populate('User_id').skip((page - 1) * limit).limit(limit);       
         //contador de documentos = contador de usuarios
        const total = await this.publicacionesModel.countDocuments(filter);


        return ResponseHelper.success({total, page, limit, data});
    }

    /**
     * Consultar por id de comentario
     */

    async findOne(id:string){
        const publi = await this.publicacionesModel.findById(id).populate('user_id').populate('publicacion_id');

        if(!publi){
        throw new NotFoundException('no se encuntra publicacion')
        }

        return ResponseHelper.success({publi})
    }
    /**
     * Actualizacion de horario
     */
    async update(id:string, dto:UpdatePublicacionesDto){
        
        const publi = await this.publicacionesModel.findById(id)

            if(!publi){
            throw new NotFoundException('no se encontro la publicacion')
            }
        
        const updatepublicacion = await this.publicacionesModel.findByIdAndUpdate(id,dto,{new:true})
    
        return ResponseHelper.success(updatepublicacion)
    }

    async remove(id:string){
        const publi = await this.publicacionesModel.findById(id)

        if(!publi){
            throw new NotFoundException('publicacion no encontrado')
        }
        const deletepublicacion = await this.publicacionesModel.findByIdAndUpdate(id,{activo:false},{new:true})
        
        return ResponseHelper.success(deletepublicacion)

    }

}