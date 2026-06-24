import { IsOptional } from "class-validator";

export class SearchcomentarioDto{
    @IsOptional()
    comentario?:string;

    @IsOptional()
    page?:number;

    @IsOptional()
    limit?:number;
}