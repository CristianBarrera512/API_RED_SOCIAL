import { IsNotEmpty,} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateSeguidoreDto{
    @ApiProperty()
    @IsNotEmpty()
    seguidor_id!:string;  
    
    @ApiProperty()
    @IsNotEmpty()
    seguido_id!:string
}