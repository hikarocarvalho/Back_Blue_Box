import { Module } from '@nestjs/common';
import { GameGenreService } from './game-genre.service';
import { GameGenreController } from './game-genre.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GameGenreController],
  providers: [GameGenreService,PrismaService]
})
export class GameGenreModule {}
