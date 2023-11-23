// import { Injectable } from '@angular/core';
// import { Produto, ProdutoCarrinho } from './produto.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class EdicaoProdutosService {

//   itens: ProdutoCarrinho[] = [];

//   constructor() {
//     this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
//   }

//   getProdutos(): ProdutoCarrinho[] {
//     return this.itens;
//   }

//   adicionarProduto(produto: ProdutoCarrinho): void {
//     this.itens.push(produto);
//     localStorage.setItem("carrinho", JSON.stringify(this.itens));
//   }

//   editarProduto(produtoId: number, novoProduto: ProdutoCarrinho): void {
//     const produtoExistente = this.itens.find((p) => p.id === produtoId);
//     if (produtoExistente) {
//       produtoExistente.nome = novoProduto.nome;
//       produtoExistente.descricao = novoProduto.descricao;
//       produtoExistente.preco = novoProduto.preco;
//       // Adicione mais campos conforme necessário
//       localStorage.setItem("carrinho", JSON.stringify(this.itens));
//     }
//   }

//   excluirProduto(produtoId: number): void {
//     this.itens = this.itens.filter((p) => p.id !== produtoId);
//     localStorage.setItem("carrinho", JSON.stringify(this.itens));
//   }

// limparCarrinho(): void {
//   this.itens = [];
//   localStorage.removeItem("carrinho");
// }

// }

import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class EdicaoProdutosService {

  itens: ProdutoCarrinho[] = [];

  constructor() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
  }

  getProdutos(): ProdutoCarrinho[] {
    return this.itens;
  }

  adicionarProduto(produto: ProdutoCarrinho): void {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  editarProduto(produtoId: number, novoProduto: ProdutoCarrinho): void {
    const produtoExistente = this.itens.find((p) => p.id === produtoId);
    if (produtoExistente) {
      produtoExistente.nome = novoProduto.nome;
      produtoExistente.descricao = novoProduto.descricao;
      produtoExistente.preco = novoProduto.preco;
      produtoExistente.quantidade = novoProduto.quantidade;
      localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }
  }

  excluirProduto(produtoId: number): void {
    this.itens = this.itens.filter((p) => p.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(): void {
    this.itens = [];
    localStorage.removeItem("carrinho");
  }
}