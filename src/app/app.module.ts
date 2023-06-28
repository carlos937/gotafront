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
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
