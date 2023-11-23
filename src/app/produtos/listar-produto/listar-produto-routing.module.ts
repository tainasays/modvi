// listar-produto-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutoComponent } from './listar-produto.component';

const routes: Routes = [
  { path: '', component: ListarProdutoComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProdutoRoutingModule {}