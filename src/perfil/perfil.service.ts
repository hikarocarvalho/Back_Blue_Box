import { Injectable } from '@nestjs/common';
import { truncate } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  constructor (private readonly prisma:PrismaService){}

  private readonly _include = {
    user:{
      select:{
        id:true
      }
    }
  }

  create(data: CreatePerfilDto) {
    return this.prisma.perfil.create({
      data,
    });
  }

  findAll(id: number) {
    return this.prisma.perfil.findMany({
      where: {userId:id}
    });
  }

  findOne(id: number) {
    return this.prisma.perfil.findUnique({
      where:    {id}
    });
  }

  update(id: number, data: UpdatePerfilDto) {
    return this.prisma.perfil.update({
      where:          {id},
      data,
      include:        this._include,
    });
  }

  remove(id: number) {
    return this.prisma.perfil.delete({
      where: {id},
    });
  }
}
