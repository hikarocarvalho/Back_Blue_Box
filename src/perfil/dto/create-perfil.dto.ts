import { Prisma } from ".prisma/client";
import { IsNotEmpty, IsString, IsInt, IsOptional } from "class-validator";
import { Perfil } from "../entities/perfil.entity";

export class CreatePerfilDto extends Perfil{
    @IsNotEmpty()
    @IsString()
    title:  string;
    @IsOptional()
    @IsString()
    image?: string | null;
    @IsInt()
    @IsNotEmpty()
    userId: number;
}
