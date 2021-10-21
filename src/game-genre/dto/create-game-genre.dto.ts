import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GameGenre } from "../entities/game-genre.entity";

export class CreateGameGenreDto extends GameGenre{
    @IsOptional()
    @IsInt()
    gameId: number;
    @IsInt()
    genreId: number;
}
