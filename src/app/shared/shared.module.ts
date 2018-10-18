import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask'
import { ControleEnvioComponent } from './controle-envio/controle-envio.component';
import { ControleIntegracoesComponent } from './controle-integracoes/controle-integracoes.component';
import { ListaEnvioComponent } from './lista-envio/lista-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';
import { NoIntegrationComponent } from './no-integration/no-integration.component';
import { R2010Component } from './layouts/r2010/r2010.component';
import { TableEnviosComponent } from './table-envios/table-envios.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../app.routes';



@NgModule({
    declarations: [ControleEnvioComponent, ControleIntegracoesComponent, ListaEnvioComponent, 
                   SolicitarEnvioComponent, NoIntegrationComponent, R2010Component,
                   TableEnviosComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot(),
              RouterModule.forRoot(ROUTES)],
    exports: [ControleEnvioComponent, ControleIntegracoesComponent, ListaEnvioComponent, 
            SolicitarEnvioComponent, NoIntegrationComponent, R2010Component, TableEnviosComponent,
            FormsModule, ReactiveFormsModule ],
    providers: [NgxMaskModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[]
    }
  }
}