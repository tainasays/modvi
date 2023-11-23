import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    
    AdicionarProdutoComponent,
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
    
  ]
})
export class ProdutosModule { }
