import { IsOptional } from "class-validator";

export class SearchSeguidoreDto{
    @IsOptional()
    seguidor_id?:string;

    @IsOptional()
    page?:number;

    @IsOptional()
    limit?:number;
}