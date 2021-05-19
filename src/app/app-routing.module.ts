import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarcategoriaComponent } from './componentes/buscarcategoria/buscarcategoria.component';
import { BuscarpalavrachaveComponent } from './componentes/buscarpalavrachave/buscarpalavrachave.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { EfetivarpedidoComponent } from './componentes/efetivarpedido/efetivarpedido.component';
import { ReciboComponent } from './componentes/recibo/recibo.component';

const routes: Routes = [
  {
    path: '',    component: CardsComponent
    //substituindo a tag <app-card> do meu html
  },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'efetivarpedido', component: EfetivarpedidoComponent },
  { path: 'recibo/:id', component: ReciboComponent },
  { path: 'categoria/:id', component: BuscarcategoriaComponent },
  { path: 'busca', component: BuscarpalavrachaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
