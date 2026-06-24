import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';

export type PublicacionesDocument = publicaciones & Document;

/**
 * Coleccion de usuarios
 */
@Schema({
    timestamps:true
})

export class publicaciones{

    @Prop({
        type:Types.ObjectId,
        ref:'User',
    })

    User_id!:Types.ObjectId;

    @Prop({
        required:true,
    })
    contenido!:string;



    @Prop({
        default:true,
    })
    activo!:boolean;


}
export const PublicacionesSchema = SchemaFactory.createForClass(publicaciones);

