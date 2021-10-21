import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'node_modules/rxjs/dist/types';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor (private readonly prisma:PrismaService){}
  private readonly _include={
    games:{
      select:{
        game:true
      }
    },
    Perfil:{
      select:{
        title:true,
        image:true,
      }
    },

  };
  
  async create(dto: CreateUserDto) {
    const data : Prisma.UsersCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password,10),
      games:{
        create : dto.games
      },
      Perfil:{
        create : dto.Perfil
      }
    };
    const createdUser = await this.prisma.users.create({
      data,
    });
    return {
      ...createdUser,
      password:undefined,
    };
  }

  findAll() {
      return "You can't do that, this server have some secure about user informations";
  }

  findById(id: number){
    return this.prisma.users.findUnique({ where: { id } });
  }

  findByEmail(email: string){
    return this.prisma.users.findUnique({ where: { email } });
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where:    {id},
      include:  this._include
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.users.update({
      where:    {id},
      data,
      include:this._include
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where:    {id},
    });
  }
}
