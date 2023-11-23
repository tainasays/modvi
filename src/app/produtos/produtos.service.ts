import { Injectable } from '@angular/core';
import { EdicaoProdutosService } from './edicao-produtos.service';
import { Produto } from './produto.model';
import { ProdutoCarrinho } from './produto.model';


@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private EdicaoProdutosService: EdicaoProdutosService) {}

  getProdutos(): Produto[] {
    return this.EdicaoProdutosService.getProdutos();
  }

  adicionarProduto(produto: ProdutoCarrinho): void {
    this.EdicaoProdutosService.adicionarProduto(produto);
  }

  editarProduto(id: number, novoProduto: Produto): void {
    // Adicionando uma lógica simples para edição
    const produtos = this.EdicaoProdutosService.getProdutos();
    const produtoExistente = produtos.find(p => p.id === id);

    if (produtoExistente) {
      // Atualiza os detalhes do produto existente
      produtoExistente.nome = novoProduto.nome;
      produtoExistente.descricao = novoProduto.descricao;
      produtoExistente.preco = novoProduto.preco;
    }
  }

  excluirProduto(id: number): void {
    // Adicionando uma lógica simples para exclusão
    const produtos = this.EdicaoProdutosService.getProdutos();
    const indiceProduto = produtos.findIndex(p => p.id === id);

    if (indiceProduto !== -1) {
      // Remove o produto da lista
      produtos.splice(indiceProduto, 1);
    }
  }
}