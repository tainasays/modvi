import { Component, OnInit } from '@angular/core';
import { Produto, produtos } from '../produto.model';
import { ProdutosDataService } from 'src/app/produto-data.service';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit { 

  produtos: Produto[] | undefined;
  produto: Produto[] | undefined;
  

  constructor(private produtosDataService: ProdutosDataService,
    private route: ActivatedRoute, private carrinhoService: CarrinhoService) { }  

  ngOnInit() {
    
    this.produtos = this.produtosDataService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;

      
      
      
    })
  }

  adicionarAoCarrinho(produto: Produto): void {
    // Chama o serviço para adicionar o produto ao carrinho
    this.carrinhoService.adicionarAoCarrinho({
      ...produto,
      quantidade: 1, // Define a quantidade desejada (pode ser ajustada conforme necessário)
    });
  }
}