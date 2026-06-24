import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';

export type ComentarioDocument = Comentarios & Document;

/**
 * Coleccion de usuarios
 */
@Schema({
    timestamps:true
})

export class Comentarios{

    @Prop({
        required:true,
    })
    comentario!:string

    @Prop({
        type:Types.ObjectId,
        ref:'User',
    })

    User_id!:Types.ObjectId

    @Prop({
        type:Types.ObjectId,
        ref:'publicaciones',
    })

    publicacion_id!:Types.ObjectId

    @Prop({
        default:true,
    })
    activo!:boolean;


}
export const comentarioSchema= SchemaFactory.createForClass(Comentarios);