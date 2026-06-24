import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';

export type SeguidoresDocument = seguidores & Document;

/**
 * Coleccion de usuarios
 */
@Schema({
    timestamps:true
})

export class seguidores{

    @Prop({
    type: Types.ObjectId,
    ref: 'User',
    })
    seguidor_id!: Types.ObjectId;

    @Prop({
    type: Types.ObjectId,
    ref: 'User',
    })
    seguido_id!: Types.ObjectId;

    @Prop({
        default:true,
    })
    activo!:boolean;


}
export const SeguidoresSchema = SchemaFactory.createForClass(seguidores);

