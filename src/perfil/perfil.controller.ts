import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}
  @Public()
  @Post()
  create(@Body() createPerfilDto: CreatePerfilDto) {
    return this.perfilService.create(createPerfilDto);
  }
  @Public()
  @Get(':id')
  findAll(@Param('id') id: number) {
    return this.perfilService.findAll(id);
  }
  @Public()
  @Get(':id/:one')
  findOne(@Param('id') id: number) {
    return this.perfilService.findOne(id);
  }
  @Public()
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(id, updatePerfilDto);
  }
  @Public()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.perfilService.remove(id);
  }
}
