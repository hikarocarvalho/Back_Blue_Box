import { Module } from '@nestjs/common';
import { ListOfGamesService } from './list-of-games.service';
import { ListOfGamesController } from './list-of-games.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ListOfGamesController],
  providers: [ListOfGamesService,PrismaService]
})
export class ListOfGamesModule {}
