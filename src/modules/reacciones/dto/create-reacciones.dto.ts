import { IsNotEmpty, IsString,  MinLength, MaxLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateReaccionesDto{
    @ApiProperty()
    @IsNotEmpty()
    publicacion_id!:string;  
    
    @ApiProperty()
    @IsNotEmpty()
    User_id!:string

    @ApiProperty({
        description:'tipo de reaccion',
        minLength:1,
        maxLength:15,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1,{message:'La reaccion debe tener minimo 1 caracteres'})
    @MaxLength(15,{message:' La reaccion debe tener mas de 300 caracteres'})
    tipo_reaccion!:string;
}