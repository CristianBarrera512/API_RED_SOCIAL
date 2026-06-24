import { PartialType } from "@nestjs/swagger";
import { CreateSeguidoreDto } from "./create-seguidores.dto";


export class UpdateSeguidoresDto extends PartialType(CreateSeguidoreDto){
}