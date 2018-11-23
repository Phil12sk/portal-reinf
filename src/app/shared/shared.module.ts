import { NgModule, ModuleWithProviders } from '@angular/core'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask'
import { ControleDeEnvioComponent } from './controle-de-envio/controle-de-envio.component';
import { ControleDeRegistroComponent } from './controle-de-registro/controle-de-registro.component';
import { ListaEnvioComponent } from './lista-envio/lista-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';
import { NoIntegrationComponent } from './no-integration/no-integration.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from '../app.routes';
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
import { PainelDeControleR1070Component } from '../core/_modal/painel-de-controle/painel-de-controle-r1070/painel-de-controle-r1070.component';
import { PainelDeControleR2060Component } from '../core/_modal/painel-de-controle/painel-de-controle-r2060/painel-de-controle-r2060.component';
import { InclusaoRegistroR1070Component } from '../core/_modal/painel-de-consulta/inclusao-registro/inclusao-registro-r1070/inclusao-registro-r1070.component';
import { InclusaoRegistroR2010Component } from '../core/_modal/painel-de-consulta/inclusao-registro/inclusao-registro-r2010/inclusao-registro-r2010.component';
import { InclusaoRegistroR2060Component } from '../core/_modal/painel-de-consulta/inclusao-registro/inclusao-registro-r2060/inclusao-registro-r2060.component';
import { PainelDeControleR1000Component } from '../core/_modal/painel-de-controle/painel-de-controle-r1000/painel-de-controle-r1000.component';
import { PainelDeControleR2010Component } from '../core/_modal/painel-de-controle/painel-de-controle-r2010/painel-de-controle-r2010.component';
import { TransmissaoComponent } from '../core/_modal/transmissao/transmissao.component';
import { AberturaDeGradeComponent } from './abertura-de-grade/abertura-de-grade.component';
import { AprovacaoDeGradeComponent } from '../core/_modal/aprovacao-de-grade/aprovacao-de-grade.component';

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
      ControleDeEnvioComponent, 
      ControleDeRegistroComponent,
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
      PainelDeControleR1000Component,
      PainelDeControleR1070Component,
      PainelDeControleR2010Component,
      PainelDeControleR2060Component,
      SolicitarEnvioComponent,
      TransmissaoComponent,
      AberturaDeGradeComponent,
      AprovacaoDeGradeComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      NgxCurrencyModule,
      NgxMaskModule.forRoot(),
      ReactiveFormsModule,
      RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
      ControleDeEnvioComponent,
      ControleDeRegistroComponent,
      FormsModule,
      InclusaoRegistroR1070Component,
      InclusaoRegistroR2010Component,
      InclusaoRegistroR2060Component,
      InputComponent,
      ListaEnvioComponent,
      NoIntegrationComponent,
      PainelDeControleComponent,
      SolicitarEnvioComponent,
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