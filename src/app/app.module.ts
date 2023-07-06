import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { LoginComponent } from './login/login.component';
import { NovoArtistaComponent } from './pages/artistas/novo-artista/novo-artista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarArtistaComponent } from './pages/artistas/editar-artista/editar-artista.component';
import { DetalhesArtistaComponent } from './pages/artistas/detalhes-artista/detalhes-artista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/loading/loading.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { NovoProjetoComponent } from './pages/projetos/novo-projeto/novo-projeto.component';
import { EditarProjetoComponent } from './pages/projetos/editar-projeto/editar-projeto.component';
import { DetalhesProjetoComponent } from './pages/projetos/detalhes-projeto/detalhes-projeto.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { NovoProdutoComponent } from './pages/produtos/novo-produto/novo-produto.component';
import { EditarProdutoComponent } from './pages/produtos/editar-produto/editar-produto.component';
import { DetalhesProdutosComponent } from './pages/produtos/detalhes-produtos/detalhes-produtos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EditarSobreComponent } from './pages/sobre/editar-sobre/editar-sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EditarContatoComponent } from './pages/contato/editar-contato/editar-contato.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ArtistasComponent,
    LoginComponent,
    NovoArtistaComponent,
    EditarArtistaComponent,
    DetalhesArtistaComponent,
    LoadingComponent,
    ProjetosComponent,
    NovoProjetoComponent,
    EditarProjetoComponent,
    DetalhesProjetoComponent,
    ProdutosComponent,
    NovoProdutoComponent,
    EditarProdutoComponent,
    DetalhesProdutosComponent,
    SobreComponent,
    EditarSobreComponent,
    ContatoComponent,
    EditarContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
