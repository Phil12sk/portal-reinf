import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'
import { Http, RequestOptions, Headers, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { DadosService } from './core/_service/dados.service';
import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";
import { ExcelService } from './core/_service/excel.service';
import { TabelaDinamicaComponent } from './core/_modal/tabela-dinamica/tabela-dinamica.component';
import { PainelDeConsultaComponent } from './painel-de-consulta/painel-de-consulta.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ConsultaGeralComponent } from './core/_modal/consulta-geral/consulta-geral.component';
import localePtBr from '@angular/common/locales/br';
import { ConsultaRegistroR1000Component } from './core/_modal/painel-de-consulta/consulta-registro/consulta-registro-r1000/consulta-registro-r1000.component';
import { ConsultaRegistroR1070Component } from './core/_modal/painel-de-consulta/consulta-registro/consulta-registro-r1070/consulta-registro-r1070.component';
import { ConsultaRegistroR2010Component } from './core/_modal/painel-de-consulta/consulta-registro/consulta-registro-r2010/consulta-registro-r2010.component';
import { ConsultaRegistroR2060Component } from './core/_modal/painel-de-consulta/consulta-registro/consulta-registro-r2060/consulta-registro-r2060.component';
import { PainelDeConsultaService } from './core/_service/painel-de-consulta.service';

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
    ConsultaGeralComponent,
    HomeComponent,
    HeaderComponent,
    PainelDeConsultaComponent,
    TabelaDinamicaComponent,
    ConsultaRegistroR1000Component,
    ConsultaRegistroR1070Component,
    ConsultaRegistroR2010Component,
    ConsultaRegistroR2060Component,
    // AprovacaoDeGradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    NgxMaskModule,
    DadosService,
    ExcelService,
    PainelDeConsultaService,
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
