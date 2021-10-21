import { Test, TestingModule } from '@nestjs/testing';
import { GameGenreController } from './game-genre.controller';
import { GameGenreService } from './game-genre.service';

describe('GameGenreController', () => {
  let controller: GameGenreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameGenreController],
      providers: [GameGenreService],
    }).compile();

    controller = module.get<GameGenreController>(GameGenreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
