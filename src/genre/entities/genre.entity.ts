import { GameGenre } from "src/game-genre/entities/game-genre.entity";

export class Genre{
    id?:        number | null;
    name:       string;
    game?:      GameGenre[];
}
