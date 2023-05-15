import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PavimentacaoComponent } from './pages/pavimentacao/pavimentacao.component';
import { SinalizacaoComponent } from './pages/sinalizacao/sinalizacao.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PoliticaComponent } from './pages/politica/politica.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'pavimentacao', component:PavimentacaoComponent},
  {path: 'sinalizacao', component:SinalizacaoComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'quem-somos', component:QuemSomosComponent},
  {path: 'contato', component:ContatoComponent},
  {path: 'politica', component:PoliticaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
