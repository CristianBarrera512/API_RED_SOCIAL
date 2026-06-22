import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';

/**
 * DTO para actulizar un rol 
 * PartialType convierte toda las propiedades 
 * CreateRoleDto campo opcionales obligatorios
 */

export class UpdateRoleDto extends PartialType(
    CreateRoleDto,
){}