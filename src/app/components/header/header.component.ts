import { Component, OnInit } from '@angular/core';
import { AuthService, UserRole } from '../../auth.service';
import { EdicaoProdutosService } from 'src/app/produtos/edicao-produtos.service';
import { CarrinhoService } from 'src/app/produtos/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private edicaoProdutosService: EdicaoProdutosService,
    public carrinhoService: CarrinhoService
  ) {}
  adicionarAoCarrinho(): void {
    const produtoAoCarrinho = {
      id: 4,
      nome: 'Produto no Carrinho',
      descricao: 'Descrição do Produto no Carrinho',
      preco: 25.0,
      imagem: './assets/produto-no-carrinho.jpg',
      quantidadeEstoque: 0,
      quantidade: 1, // Adicionando a quantidade ao carrinho
    };
  
    this.carrinhoService.adicionarAoCarrinho(produtoAoCarrinho);
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  adicionarProduto(): void {
    const novoProduto = { id: 3, nome: 'Novo Produto', descricao: 'Descrição do Novo Produto', preco: 30.0, imagem: "./assets/planta-1.jpg", quantidadeEstoque: 0, quantidade: 2  };
    this.edicaoProdutosService.adicionarProduto(novoProduto);
  }

  editarProdutos(): void {
    const idDoProdutoAEditar = 1; // Substitua pelo ID do produto que você deseja editar
    const novoProduto = { id: idDoProdutoAEditar, nome: 'Produto Editado', descricao: 'Descrição Editada', preco: 99.0, imagem: "./assets/planta-1.jpg", quantidadeEstoque: 0, quantidade: 4   };
    this.edicaoProdutosService.editarProduto(idDoProdutoAEditar, novoProduto);
  }
}