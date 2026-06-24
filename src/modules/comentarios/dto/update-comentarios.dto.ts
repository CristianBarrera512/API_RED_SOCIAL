import { PartialType } from "@nestjs/swagger";
import { CreatecomentarioDto } from "./create-comentarios.dto";

export class UpdatecomentarioDto extends PartialType(CreatecomentarioDto){
    
}