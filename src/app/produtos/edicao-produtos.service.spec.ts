import { TestBed } from '@angular/core/testing';

import { EdicaoProdutosService } from './edicao-produtos.service';

describe('EdicaoProdutosService', () => {
  let service: EdicaoProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdicaoProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
