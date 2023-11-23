import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

import { CommonModule } from '@angular/common';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosService } from './produtos/produtos.service';
import { EdicaoProdutosService } from './produtos/edicao-produtos.service';
import { EdicaoProdutosComponent } from './components/edicaoprodutos/edicaoprodutos.component';
import { ListarProdutoComponent } from './produtos/listar-produto/listar-produto.component';
// import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    EdicaoProdutosComponent,
    
    

    
    // ListarProdutoComponent
    
    
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    
    
  ],
  providers: [EdicaoProdutosService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
