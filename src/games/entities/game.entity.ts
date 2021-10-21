import { GameGenre } from "src/game-genre/entities/game-genre.entity";
import { ListOfGames } from "../../list-of-games/entities/list-of-game.entity";
export class Game{
    id?:            number | null;
    title:          string;
    folder:         string;
    description:    string;
    year:           number;
    score:          number;
    youtubeUrl?:    string | null;
    gamePlayUrl?:   string | null;
    users?:         ListOfGames[] | null;
    genre?:        GameGenre[];
}
