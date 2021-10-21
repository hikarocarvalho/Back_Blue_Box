import { Test, TestingModule } from '@nestjs/testing';
import { GameGenreService } from './game-genre.service';

describe('GameGenreService', () => {
  let service: GameGenreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameGenreService],
    }).compile();

    service = module.get<GameGenreService>(GameGenreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
