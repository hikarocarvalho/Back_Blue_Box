import { Test, TestingModule } from '@nestjs/testing';
import { ListOfGamesController } from './list-of-games.controller';
import { ListOfGamesService } from './list-of-games.service';

describe('ListOfGamesController', () => {
  let controller: ListOfGamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOfGamesController],
      providers: [ListOfGamesService],
    }).compile();

    controller = module.get<ListOfGamesController>(ListOfGamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
