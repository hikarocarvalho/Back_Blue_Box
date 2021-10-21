import { Test, TestingModule } from '@nestjs/testing';
import { ListOfGamesService } from './list-of-games.service';

describe('ListOfGamesService', () => {
  let service: ListOfGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOfGamesService],
    }).compile();

    service = module.get<ListOfGamesService>(ListOfGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
