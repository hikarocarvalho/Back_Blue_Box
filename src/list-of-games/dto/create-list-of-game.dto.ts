import { Prisma } from ".prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";
import { ListOfGames } from "../entities/list-of-game.entity";
export class CreateListOfGameDto extends ListOfGames{
    @IsNotEmpty()
    @IsInt()
    userId:      number;
    @IsNotEmpty()
    @IsInt()
    gameId:      number;
}
