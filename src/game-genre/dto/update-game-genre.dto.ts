import { PartialType } from '@nestjs/mapped-types';
import { CreateGameGenreDto } from './create-game-genre.dto';

export class UpdateGameGenreDto extends PartialType(CreateGameGenreDto) {}
