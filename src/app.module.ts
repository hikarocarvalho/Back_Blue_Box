import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { PrismaService } from './prisma/prisma.service';
import { PerfilModule } from './perfil/perfil.module';
import { GenreModule } from './genre/genre.module';
import { ListOfGamesModule } from './list-of-games/list-of-games.module';
import { GameGenreModule } from './game-genre/game-genre.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
@Module({
  imports: [UsersModule, GamesModule, PerfilModule, GenreModule, ListOfGamesModule, GameGenreModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
})
export class AppModule {}
