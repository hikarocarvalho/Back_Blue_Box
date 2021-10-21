import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';

@Injectable()
export class ListOfGamesService {
  constructor(private readonly prisma:PrismaService){}
  private readonly _include={
    
    game:{
      select:{
        id:true,
        title:true,
        folder:true,
        description:true,
        year:true,
        score:true,
        youtubeUrl:true,
        gamePlayUrl:true,
        genre:{
          select:{
            genre:{
              select:{
                name:true,
              }
            }
          }

        },
      }
    }
  }
  create(data: CreateListOfGameDto) {
    return this.prisma.listOfGames.create({
      data,
    });
  }

  findAll(id: number) {
    return this.prisma.listOfGames.findMany({
      where: {userId:id},
      include:this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.listOfGames.findUnique({
      where:    {id},
    });
  }

  update(id: number, data: UpdateListOfGameDto) {
    return this.prisma.listOfGames.update({
      where:    {id},
      data,
    });
  }

  remove(id: number) {
    return this.prisma.listOfGames.delete({
      where:    {id},
    });
  }
}
