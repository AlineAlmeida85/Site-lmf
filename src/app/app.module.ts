import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { PavimentacaoComponent } from './pages/pavimentacao/pavimentacao.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { SinalizacaoComponent } from './pages/sinalizacao/sinalizacao.component';
import { BannerComponent } from './components/banner/banner.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { FazemosComponent } from './components/fazemos/fazemos.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuContatosERedesComponent } from './components/menu-contatos-e-redes/menu-contatos-e-redes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProdutosDestaqueComponent } from './components/produtos-destaque/produtos-destaque.component';
import { SomosComponent } from './components/somos/somos.component';
import { TagComponent } from './components/tag/tag.component';
import { TitleTagComponent } from './components/title-tag/title-tag.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { PoliticaComponent } from './pages/politica/politica.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    PavimentacaoComponent,
    ProdutosComponent,
    QuemSomosComponent,
    SinalizacaoComponent,
    BannerComponent,
    DepoimentosComponent,
    FazemosComponent,
    FooterComponent,
    MenuContatosERedesComponent,
    NavbarComponent,
    ProdutosDestaqueComponent,
    SomosComponent,
    TagComponent,
    TitleTagComponent,
    WhatsappComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
