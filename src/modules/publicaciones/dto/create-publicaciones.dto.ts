import { IsNotEmpty, IsString,  MinLength, MaxLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePublicacionesDto{ 
    @ApiProperty()
    @IsNotEmpty()
    user_id!:string


    @ApiProperty({
        description:'contenido',
        minLength:0,
        maxLength:100,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(0)
    @MaxLength(100,{message:'El contenido no debe tener mas de 100 caracteres'})
    contenido!:string;
}