import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { ListarProdutoRoutingModule } from './listar-produto-routing.module';
import { RouterModule } from '@angular/router';
import { ProdutosModule } from '../produtos.module';
import { ListarProdutoComponent } from './listar-produto.component';


@NgModule({
  declarations: [
   ListarProdutoComponent,
   
  ],
  imports: [
    CommonModule,
    ListarProdutoRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ListarProdutoModule { }