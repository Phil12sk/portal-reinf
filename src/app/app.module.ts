import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { EventosPendentesComponent } from './eventos-pendentes/eventos-pendentes.component';
import { SharedModule } from './shared/shared.module';
import { DadosService } from './core/_service/dados.service';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/br';


import { CurrencyMaskModule } from "ngx-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency-mask/src/currency-mask.config";

registerLocaleData(localePtBr, 'pt-BR');

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EventosPendentesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule.forRoot(),
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    NgxMaskModule,
    DadosService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
