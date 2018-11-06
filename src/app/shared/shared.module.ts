import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask'
import { ControleEnvioComponent } from './controle-envio/controle-envio.component';
import { ControleIntegracoesComponent } from './controle-integracoes/controle-integracoes.component';
import { ListaEnvioComponent } from './lista-envio/lista-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';
import { NoIntegrationComponent } from './no-integration/no-integration.component';
import { TableEnviosComponent } from './table-envios/table-envios.component';
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
import { TableEnviosR1000Component } from '../core/_modal/table-envios/table-envios-r1000/table-envios-r1000.component';
import { TableEnviosR1070Component } from '../core/_modal/table-envios/table-envios-r1070/table-envios-r1070.component';
import { TableEnviosR2010Component } from '../core/_modal/table-envios/table-envios-r2010/table-envios-r2010.component';
import { TableEnviosR2060Component } from '../core/_modal/table-envios/table-envios-r2060/table-envios-r2060.component';
import { TableEnviosR2099Component } from '../core/_modal/table-envios/table-envios-r2099/table-envios-r2099.component';
import { TableEnviosR9000Component } from '../core/_modal/table-envios/table-envios-r9000/table-envios-r9000.component';

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
    declarations: [ControleEnvioComponent, ControleIntegracoesComponent, ListaEnvioComponent, 
                   SolicitarEnvioComponent, NoIntegrationComponent, TableEnviosComponent,
                   R1000Component, R1070Component, R2010Component, R2060Component,
                   ControleRegistrosR1070Component, ControleRegistrosR2010Component,
                   ControleRegistrosR2060Component, InputComponent, 
                   TableEnviosR1000Component, TableEnviosR1070Component, TableEnviosR2010Component,
                   TableEnviosR2060Component, TableEnviosR2099Component, TableEnviosR9000Component],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot(),
              RouterModule.forRoot(ROUTES), NgxCurrencyModule, 
              RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})],
    exports: [ControleEnvioComponent, ControleIntegracoesComponent, ListaEnvioComponent, 
            SolicitarEnvioComponent, NoIntegrationComponent, TableEnviosComponent,
            R1000Component, R1070Component, R2010Component, R2060Component,
            FormsModule, ReactiveFormsModule, InputComponent, TableEnviosR1000Component],
    providers: [NgxMaskModule, {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[]
    }
  }
}