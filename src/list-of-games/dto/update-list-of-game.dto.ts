import { PartialType } from '@nestjs/mapped-types';
import { CreateListOfGameDto } from './create-list-of-game.dto';

export class UpdateListOfGameDto extends PartialType(CreateListOfGameDto) {}
