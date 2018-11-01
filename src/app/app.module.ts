import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/br';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { EventosPendentesComponent } from './eventos-pendentes/eventos-pendentes.component';
import { SharedModule } from './shared/shared.module';
import { DadosService } from './core/_service/dados.service';
import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";
import { PainelDeControleComponent } from './core/_modal/painel-de-controle/painel-de-controle.component';


import { PainelDeControleR1000Component } from './core/_modal/painel-de-controle-r1000/painel-de-controle-r1000.component';
import { TabelaDinamicaComponent } from './core/_modal/tabela-dinamica/tabela-dinamica.component';
import { PainelDeControleR2060Component } from './core/_modal/painel-de-controle-r2060/painel-de-controle-r2060.component';
import { PainelDeControleR1070Component } from './core/_modal/painel-de-controle-r1070/painel-de-controle-r1070.component';
import { TransmissaoComponent } from './core/_modal/transmissao/transmissao.component';
import { PainelConsultaComponent } from './painel-consulta/painel-consulta.component';


registerLocaleData(localePtBr,'pt-BR');

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EventosPendentesComponent,
    PainelDeControleComponent,
    PainelDeControleR1000Component,
    TabelaDinamicaComponent,
    PainelDeControleR2060Component,
    PainelDeControleR1070Component,
    TransmissaoComponent,
    PainelConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    NgxMaskModule,
    DadosService,
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
