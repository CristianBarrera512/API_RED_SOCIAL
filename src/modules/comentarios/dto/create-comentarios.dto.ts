import { IsNotEmpty, IsString,  MinLength, MaxLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatecomentarioDto{
    @ApiProperty()
    @IsNotEmpty()
    publicacion_id!:string;  
    
    @ApiProperty()
    @IsNotEmpty()
    user_id!:string


    @ApiProperty({
        description:'comentario',
        minLength:1,
        maxLength:300,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1,{message:'El comentario debe tener minimo 1 caracteres'})
    @MaxLength(300,{message:'El comentario no debe tener mas de 300 caracteres'})
    comentario!:string;
}