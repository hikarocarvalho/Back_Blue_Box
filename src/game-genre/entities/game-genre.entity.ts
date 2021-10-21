import { Prisma } from ".prisma/client";

export class GameGenre{
    id?: number | null;
    gameId: number;
    genreId: number;
}
