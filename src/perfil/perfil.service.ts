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
        name:       true,
        lastName:  true,
        email:      true,
        password:   true,
        CPF:        true,
      }
    }
  }

  create(data: CreatePerfilDto) {
    return this.prisma.perfil.create({
      data,
      include:this._include
    });
  }

  findAll() {
    return this.prisma.perfil.findMany();
  }

  findOne(id: number) {
    return this.prisma.perfil.findUnique({
      where:    {id},
      include:  this._include,
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
