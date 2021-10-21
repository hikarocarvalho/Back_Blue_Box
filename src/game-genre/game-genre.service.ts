import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameGenreDto } from './dto/create-game-genre.dto';
import { UpdateGameGenreDto } from './dto/update-game-genre.dto';

@Injectable()
export class GameGenreService {
  constructor(private readonly prisma:PrismaService){} 
  private readonly _include={
    game:{
      select:{
        id:true,
      }
    },
    genre:{
      select:{
        id: true,
      }
    }
  }
  create(data: CreateGameGenreDto) {
    return this.prisma.gameGenre.create({
      include:this._include,
      data,
    });
  }

  findAll() {
    return this.prisma.gameGenre.findMany({
      include:this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.gameGenre.findUnique({
      where: {id},
      include: this._include,
    });
  }

  update(id: number, data: UpdateGameGenreDto) {
    return this.prisma.gameGenre.update({
      where: {id},
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.gameGenre.delete({
      where: {id},
    });
  }
}
