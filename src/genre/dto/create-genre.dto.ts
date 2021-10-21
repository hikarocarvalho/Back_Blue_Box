import { Genre } from "../entities/genre.entity";
import { Prisma } from ".prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateGameGenreDto } from "src/game-genre/dto/create-game-genre.dto";
export class CreateGenreDto extends Genre{
    @IsString()
    @IsNotEmpty()
    name:     string;
    @IsInt()
    @IsOptional()
    game?:      CreateGameGenreDto[];
}
