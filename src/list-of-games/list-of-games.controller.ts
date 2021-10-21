import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { ListOfGamesService } from './list-of-games.service';
import { CreateListOfGameDto } from './dto/create-list-of-game.dto';
import { UpdateListOfGameDto } from './dto/update-list-of-game.dto';
import { User } from 'src/users/entities/user.entity';
import { CurrentUser } from 'src/decorators/currentUser.decorator';

@Controller('list-of-games')
export class ListOfGamesController {
  constructor(private readonly listOfGamesService: ListOfGamesService) {}

  @Post()
  create(@Body() createListOfGameDto: CreateListOfGameDto) {
    return this.listOfGamesService.create(createListOfGameDto);
  }

  @Get()
  findAll(@CurrentUser() currentUser:User) {
    return this.listOfGamesService.findAll(currentUser.id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.listOfGamesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateListOfGameDto: UpdateListOfGameDto) {
    return this.listOfGamesService.update(id, updateListOfGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.listOfGamesService.remove(id);
  }
}
