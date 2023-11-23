

import { Component, OnInit } from '@angular/core';

import { EdicaoProdutosService } from 'src/app/produtos/edicao-produtos.service';
import { ProdutoCarrinho } from 'src/app/produtos/produto.model';

@Component({
  selector: 'app-edicaoprodutos',
  templateUrl: './edicaoprodutos.component.html',
  styleUrls: ['./edicaoprodutos.component.css']
})
export class EdicaoProdutosComponent implements OnInit {
  produtos: ProdutoCarrinho[] = [];
  total: number = 0;

  constructor(private edicaoProdutosService: EdicaoProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
    this.calcularTotal();
  }

  carregarProdutos(): void {
    this.produtos = this.edicaoProdutosService.getProdutos();
  }

  adicionarProduto(): void {
    const novoProduto: ProdutoCarrinho = {
      id: this.gerarNovoId(),  // Método para gerar IDs, implemente conforme necessário
      nome: 'Novo Produto',
      descricao: 'Descrição do Novo Produto',
      preco: 0.0,
      imagem: './assets/seu-caminho/nova-imagem.jpg',
      quantidadeEstoque: 0,
      quantidade: 1
    };

    this.edicaoProdutosService.adicionarProduto(novoProduto);
    this.carregarProdutos();
    this.calcularTotal();
  }

  editarProduto(id: number): void {
    const produtoExistente = this.produtos.find((p) => p.id === id);

    if (produtoExistente) {
      // Simulando uma edição de preço para demonstração
      produtoExistente.preco = 19.99;
      console.log('Produto editado:', produtoExistente);
    }
  }

  excluirProduto(id: number): void {
    // Simulando uma exclusão de produto para demonstração
    this.edicaoProdutosService.excluirProduto(id);
    this.carregarProdutos();
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
  }

  comprar(): void {
    // Lógica para realizar a compra (pode incluir a interação com o serviço)
    alert('Compra realizada!');
    this.edicaoProdutosService.limparCarrinho();
    this.carregarProdutos();
    this.calcularTotal();
  }

  private gerarNovoId(): number {
    // Implemente a lógica para gerar IDs únicos conforme necessário
    // Este é apenas um exemplo simples
    return Math.floor(Math.random() * 1000);
  }
}