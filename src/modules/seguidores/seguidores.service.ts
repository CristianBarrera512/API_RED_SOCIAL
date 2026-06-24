import { BadRequestException, Injectable, NotFoundException, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { ResponseHelper } from "src/common/helpers/response.helper";
import { seguidores, SeguidoresDocument } from "./schema/seguidores.schema";
import { CreateSeguidoreDto } from "./dto/create-seguidores.dto";
import { SearchSeguidoreDto } from "./dto/search-seguidores.dto";
import { UpdateSeguidoresDto } from "./dto/update-seguidores.dto";



@Injectable()
export class SeguidoresService{
    constructor(
        @InjectModel(seguidores.name)
        private readonly seguidoresModel:
        Model<SeguidoresDocument>
    ){}
    /**
     * Metodo para creacion de comentario
     */

    async create(dto:CreateSeguidoreDto){

     const seguir = await this.seguidoresModel.create(dto);

    return ResponseHelper.success(seguir,201);
    }

    /**
     * Consultar un usuario
     */


    async findAll(search:SearchSeguidoreDto){

        const filter: any = {activo:true};

        if(search.seguidor_id){
            filter.seguidor_id={
                $regex:search.seguidor_id
            };
        }

        const page = Number(search.page) || 1;
        const limit = Number (search.limit) || 10;

        //Consulta

        const data = await this.seguidoresModel.find(filter).populate('seguidor_id').populate('seguido_id').skip((page - 1) * limit).limit(limit);       
         //contador de documentos = contador de usuarios
        const total = await this.seguidoresModel.countDocuments(filter);


        return ResponseHelper.success({total, page, limit, data});
    }

    /**
     * Consultar por id de comentario
     */

    async findOne(id:string){
       const seguir = await this.seguidoresModel.findById(id).populate('seguidor_id').populate('seguido_id');

        if(!seguir){
        throw new NotFoundException('no se encuntra seguidor')
        }

        return ResponseHelper.success({seguir})
    }
    /**
     * Actualizacion de horario
     */
    async update(id:string, dto:UpdateSeguidoresDto){
        
        const seguir = await this.seguidoresModel.findById(id)

            if(!seguir){
            throw new NotFoundException('no se encontro el seguidor')
            }
        
        const updateseguir = await this.seguidoresModel.findByIdAndUpdate(id,dto,{new:true})
    
        return ResponseHelper.success(updateseguir)
    }

    async remove(id:string){
        const seguir = await this.seguidoresModel.findById(id)

        if(!seguir){
            throw new NotFoundException('seguidor no encontrado')
        }
        const deleteseguir = await this.seguidoresModel.findByIdAndUpdate(id,{activo:false},{new:true})
        
        return ResponseHelper.success(deleteseguir)

    }
        async particalUpdate(id:string,dto:UpdateSeguidoresDto){
        const role = await this.seguidoresModel.findById(id);

        if(!role){
            throw new NotFoundException('Role no encontrado');
        }

        const updatedRole = await this.seguidoresModel.findByIdAndUpdate(id,{$set:dto,},{new:true});

        return ResponseHelper.success(updatedRole,);
    }

}