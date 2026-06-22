/**
 * aqui se hara validaciones para saber si es o no string
 */
import{
    IsNotEmpty,
    IsString,
} from 'class-validator';
/**
 * para swagger
 */
import {
    ApiProperty,
} from '@nestjs/swagger';

export class CreateRoleDto{
    @ApiProperty({
        example: 'Administrador'
    })
    @IsString()
    @IsNotEmpty()
    nombre: string;
}