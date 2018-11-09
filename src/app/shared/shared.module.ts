import { NgModule, ModuleWithProviders } from '@angular/core'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask'
import { ControleEnvioComponent } from './controle-envio/controle-envio.component';
import { ControleIntegracoesComponent } from './controle-integracoes/controle-integracoes.component';
import { ListaEnvioComponent } from './lista-envio/lista-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';
import { NoIntegrationComponent } from './no-integration/no-integration.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from '../app.routes';
import { R1000Component } from './layouts/r1000/r1000.component';
import { R1070Component } from './layouts/r1070/r1070.component';
import { R2010Component } from './layouts/r2010/r2010.component';
import { R2060Component } from './layouts/r2060/r2060.component';
import { ControleRegistrosR1070Component } from '../core/_modal/controle-registros/controle-registros-r1070/controle-registros-r1070.component';
import { ControleRegistrosR2010Component } from '../core/_modal/controle-registros/controle-registros-r2010/controle-registros-r2010.component';
import { ControleRegistrosR2060Component } from '../core/_modal/controle-registros/controle-registros-r2060/controle-registros-r2060.component';
import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";
import { InputComponent } from './input/input.component';
import { ControleEnvioR1000Component } from '../core/_modal/controle-envio/controle-envio-r1000/controle-envio-r1000.component';
import { ControleEnvioR1070Component } from '../core/_modal/controle-envio/controle-envio-r1070/controle-envio-r1070.component';
import { ControleEnvioR2010Component } from '../core/_modal/controle-envio/controle-envio-r2010/controle-envio-r2010.component';
import { ControleEnvioR2060Component } from '../core/_modal/controle-envio/controle-envio-r2060/controle-envio-r2060.component';
import { ControleEnvioR2099Component } from '../core/_modal/controle-envio/controle-envio-r2099/controle-envio-r2099.component';
import { ControleEnvioR5011Component } from '../core/_modal/controle-envio/controle-envio-r5011/controle-envio-r5011.component';
import { ControleEnvioR9000Component } from '../core/_modal/controle-envio/controle-envio-r9000/controle-envio-r9000.component';
import { PainelDeControleComponent } from './painel-de-controle/painel-de-controle.component';
import { PainelDeControleR2060Component } from '../core/_modal/painel-de-controle/painel-de-controle-r2060/painel-de-controle-r2060.component';
import { PainelDeControleR1070Component } from '../core/_modal/painel-de-controle/painel-de-controle-r1070/painel-de-controle-r1070.component';
import { InclusaoRegistroR1070Component } from '../core/_modal/inclusao-registro/inclusao-registro-r1070/inclusao-registro-r1070.component';
import { InclusaoRegistroR2010Component } from '../core/_modal/inclusao-registro/inclusao-registro-r2010/inclusao-registro-r2010.component';
import { InclusaoRegistroR2060Component } from '../core/_modal/inclusao-registro/inclusao-registro-r2060/inclusao-registro-r2060.component';

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
      ControleEnvioComponent, 
      ControleIntegracoesComponent, 
      ControleEnvioComponent,
      ControleEnvioR1000Component,
      ControleEnvioR1070Component,
      ControleEnvioR2010Component,
      ControleEnvioR2060Component,
      ControleEnvioR2099Component,
      ControleEnvioR5011Component,
      ControleEnvioR9000Component,
      ControleRegistrosR1070Component,
      ControleRegistrosR2010Component,
      ControleRegistrosR2060Component,
      InclusaoRegistroR1070Component,
      InclusaoRegistroR2010Component,
      InclusaoRegistroR2060Component,
      InputComponent,
      ListaEnvioComponent, 
      NoIntegrationComponent,
      PainelDeControleComponent,
      PainelDeControleR2060Component,
      PainelDeControleR1070Component,
      SolicitarEnvioComponent,
      R1000Component, 
      R1070Component, 
      R2010Component, 
      R2060Component],
    imports: [
      CommonModule,
      FormsModule,
      NgxCurrencyModule,
      NgxMaskModule.forRoot(),
      ReactiveFormsModule,
      RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
      ControleEnvioR1000Component,
      ControleEnvioComponent,
      ControleIntegracoesComponent,
      FormsModule,
      InputComponent,
      ListaEnvioComponent,
      NoIntegrationComponent,
      PainelDeControleComponent,
      SolicitarEnvioComponent,
      R1000Component,
      R1070Component,
      R2010Component,
      R2060Component,
      ReactiveFormsModule],
    providers: [
      NgxMaskModule,
      {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig}
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[]
    }
  }
}