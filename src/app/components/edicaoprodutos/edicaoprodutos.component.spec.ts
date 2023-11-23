import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProdutosComponent } from './edicaoprodutos.component';

describe('EdicaoprodutosComponent', () => {
  let component: EdicaoProdutosComponent;
  let fixture: ComponentFixture<EdicaoProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoProdutosComponent]
    });
    fixture = TestBed.createComponent(EdicaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
