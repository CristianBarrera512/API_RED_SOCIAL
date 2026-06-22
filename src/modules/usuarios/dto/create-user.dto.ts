import { IsEmail, IsNotEmpty, IsString,  MinLength, MaxLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto{
    @ApiProperty({
        description:'Nombre del usuarios',
        minLength:3,
        maxLength:50,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3,{message:'El nombre debe tener minimo 3 caracteres'})
    @MaxLength(50,{message:'El nombre no debe tener mas de 50 caracteres'})
    nombre!:string;


    @ApiProperty({
        description:'correo del usuario',
        maxLength:100
    })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100,{message:'El correo no debe tener mas de 100 caracteres'})
    correo!:string;


    @ApiProperty({
        description:' contraseña del usuario',
        minLength:8,
        maxLength:20,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:'La contraseña es demasiado corta'})
    @MaxLength(20,{message:'La contraseña es demasiado larga'})
    password!:string;


    @ApiProperty()
    @IsNotEmpty()
    rol_id!:string

}