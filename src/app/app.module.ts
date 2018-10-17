import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { EventosPendentesComponent } from './eventos-pendentes/eventos-pendentes.component';
import { ControleIntegracoesComponent } from './controle-integracoes/controle-integracoes.component';
import { ControleEnvioComponent } from './controle-envio/controle-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EventosPendentesComponent,
    ControleIntegracoesComponent,
    ControleEnvioComponent,
    SolicitarEnvioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgxMaskModule.forRoot()
  ],
  providers: [
    NgxMaskModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
