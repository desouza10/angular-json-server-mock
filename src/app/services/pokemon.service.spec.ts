import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { provideHttpClient } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
