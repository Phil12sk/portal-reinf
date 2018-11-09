import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PainelDeControleComponent } from './shared/painel-de-controle/painel-de-controle.component';
import { ControleIntegracoesComponent } from './shared/controle-integracoes/controle-integracoes.component';
import { ControleEnvioComponent } from './shared/controle-envio/controle-envio.component';
import { SolicitarEnvioComponent } from './shared/solicitar-envio/solicitar-envio.component';
import { NoIntegrationComponent } from './shared/no-integration/no-integration.component';
import { R1000Component } from './shared/layouts/r1000/r1000.component';
import { R1070Component } from './shared/layouts/r1070/r1070.component';
import { R2010Component } from './shared/layouts/r2010/r2010.component';
import { R2060Component } from './shared/layouts/r2060/r2060.component';
import { PainelDeControleR2010Component } from './core/_modal/painel-de-controle/painel-de-controle-r2010/painel-de-controle-r2010.component';
import { PainelDeControleR1000Component } from './core/_modal/painel-de-controle/painel-de-controle-r1000/painel-de-controle-r1000.component';
import { PainelDeControleR1070Component } from './core/_modal/painel-de-controle/painel-de-controle-r1070/painel-de-controle-r1070.component';
import { PainelDeControleR2060Component } from './core/_modal/painel-de-controle/painel-de-controle-r2060/painel-de-controle-r2060.component';
import { TransmissaoComponent } from './core/_modal/transmissao/transmissao.component';
import { ControleRegistrosR1070Component } from './core/_modal/controle-registros/controle-registros-r1070/controle-registros-r1070.component';
import { ControleRegistrosR2010Component } from './core/_modal/controle-registros/controle-registros-r2010/controle-registros-r2010.component';
import { ControleRegistrosR2060Component } from './core/_modal/controle-registros/controle-registros-r2060/controle-registros-r2060.component';
import { PainelDeConsultaComponent } from './painel-de-consulta/painel-de-consulta.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: 'painel-de-controle', component: PainelDeControleComponent, children: [
            {path: 'R1000', component: R1000Component},
            {path: 'R1070', component: R1070Component},
            {path: 'R2010', component: R2010Component},
            {path: 'R2060', component: R2060Component}
        ]},
        {path: 'controle-de-registros', component: ControleIntegracoesComponent, children: [
            {path: 'controle-de-registros-R1070', component: ControleRegistrosR1070Component},
            {path: 'controle-de-registros-R2010', component: ControleRegistrosR2010Component},
            {path: 'controle-de-registros-R2060', component: ControleRegistrosR2060Component},
            {path: 'R1070', component: R1070Component},
            {path: 'R2010', component: R2010Component},
            {path: 'R2060', component: R2060Component},
            {path: 'no-integration', component: NoIntegrationComponent}
        ]},
        {path: 'controle-envio', component: ControleEnvioComponent},
        {path: 'solicitar-envio', component: SolicitarEnvioComponent},
        {path: 'painel-consulta', component: PainelDeConsultaComponent}
    ]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]