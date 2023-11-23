// adicionar-produto.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { ProdutoCarrinho } from '../produto.model';


@Component({
  selector: 'app-adicionar-produto',
  template: './adicionar-produto.component.html', // Referencie o arquivo de template
})

export class AdicionarProdutoComponent {
  novoProduto: ProdutoCarrinho = {
    id: 0, nome: '', descricao: '', preco: 0,
    imagem: '',
    quantidadeEstoque: 0, 
    quantidade: 0
  };

  constructor(private produtosService: ProdutosService, private router: Router) {}

  adicionarProduto(): void {
    this.produtosService.adicionarProduto(this.novoProduto);
    this.router.navigate(['/listar-produto']);
  }
}