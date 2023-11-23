import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

import { Router } from '@angular/router';
import { ProdutoCarrinho } from '../produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  itensCarrinho: ProdutoCarrinho[] = []
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}
 

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco*curr.quantidade), 0);
  }

  removerPlantaCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerPlantaCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    alert('A sua compra foi finalizada!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["listar-produtos"]);
  }
}