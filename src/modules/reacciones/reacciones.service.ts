import { BadRequestException, Injectable, NotFoundException, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ResponseHelper } from "src/common/helpers/response.helper";
import { Reacciones, ReaccionesDocument } from "./schema/reacciones.schema";
import { CreateReaccionesDto } from "./dto/create-reacciones.dto";
import { SearchReaccionesDto } from "./dto/search-reacciones.dto";
import { UpdateReaccionesDto } from "./dto/update-reacciones.dto";



@Injectable()
export class ReaccionesService{
    constructor(
        @InjectModel(Reacciones.name)
        private readonly ReaccionesModel:
        Model<ReaccionesDocument>
    ){}
    /**
     * Metodo para creacion de comentario
     */

    async create(dto:CreateReaccionesDto){
         
    const Real =await this.ReaccionesModel.create(dto);

        return ResponseHelper.success(Real,201);
    }

    /**
     * Consultar un usuario
     */


    async findAll(search:SearchReaccionesDto){

        const filter: any = {activo:true};

        if(search.tipo_reaccion){
            filter.tipo_reaccion={
                $regex:search.tipo_reaccion, 
                $options:'i'
            };
        }

        const page = Number(search.page) || 1;
        const limit = Number (search.limit) || 10;

        //Consulta

        const data = await this.ReaccionesModel.find(filter).populate('User_id').populate('publicacion_id').skip((page - 1) * limit).limit(limit);       
         //contador de documentos = contador de usuarios
        const total = await this.ReaccionesModel.countDocuments(filter);


        return ResponseHelper.success({total, page, limit, data});
    }

    /**
     * Consultar por id de comentario
     */

    async findOne(id:string){
        const Real = await this.ReaccionesModel.findById(id).populate('User_id').populate('publicacion_id');

        if(!Real){
        throw new NotFoundException('reaccion no encontrado')
        }

        return ResponseHelper.success({Real})
    }
    /**
     * Actualizacion de horario
     */
    async update(id:string, dto:UpdateReaccionesDto,){
        
        const Real = await this.ReaccionesModel.findById(id)

            if(!Real){
            throw new NotFoundException('no se encontro el reaccion')
            }
        
        const updateReal = await this.ReaccionesModel.findByIdAndUpdate(id,dto,{new:true})
    
        return ResponseHelper.success(updateReal)
    }

    async remove(id:string){
        const Real = await this.ReaccionesModel.findById(id)

        if(!Real){
            throw new NotFoundException('reaccion no encontrado')
        }
        const deleteReal = await this.ReaccionesModel.findByIdAndUpdate(id,{activo:false},{new:true})
        
        return ResponseHelper.success(deleteReal)

    }
    async particalUpdate(id:string,dto:UpdateReaccionesDto){
        const role = await this.ReaccionesModel.findById(id);
    
        if(!role){
            throw new NotFoundException('Role no encontrado');
        }
    
        const updatedRole = await this.ReaccionesModel.findByIdAndUpdate(id,{$set:dto,},{new:true});
    
            return ResponseHelper.success(updatedRole,);
        }

}