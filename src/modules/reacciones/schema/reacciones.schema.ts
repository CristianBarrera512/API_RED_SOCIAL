import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';

export type ReaccionesDocument = Reacciones & Document;

/**
 * Coleccion de usuarios
 */
@Schema({
    timestamps:true
})

export class Reacciones{

    @Prop({
        required:true,
    })
    tipo_reaccion!:string

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
export const ReaccionesSchema= SchemaFactory.createForClass(Reacciones);

