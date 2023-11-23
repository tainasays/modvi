import { Injectable } from '@angular/core';
import { Produto, produtos } from './produtos/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutosDataService {

  produtos: Produto[] = produtos;

  constructor() { }
  
  getAll(){
    return this.produtos;
  }

  getOne(produtoID: number){
    return this.produtos.find(produto => produto.id === produtoID);
  }
}