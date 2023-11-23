import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarProdutoComponent } from './produtos/listar-produto/listar-produto.component';
import { AdicionarProdutoComponent } from './produtos/adicionar-produto/adicionar-produto.component';
import { AuthGuard } from './auth.guard';
import { CarrinhoComponent } from './produtos/carrinho/carrinho.component';
import { EdicaoProdutosComponent } from './components/edicaoprodutos/edicaoprodutos.component';



const routes: Routes = [
  { path: 'listar-produto', loadChildren: () => import('./produtos/listar-produto/listar-produto.module').then(m => m.ListarProdutoModule) },
  { path: 'listar-produto/listar-produto', component: ListarProdutoComponent },
  { path: 'adicionar-produto', component: AdicionarProdutoComponent },
  { path: '', redirectTo: 'listar-produto', pathMatch: 'full' },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'login', component: LoginComponent},
  { path: 'edicao-produtos', component: EdicaoProdutosComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




