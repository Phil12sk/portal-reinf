import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PainelDeControleComponent } from './shared/painel-de-controle/painel-de-controle.component';
import { ControleDeRegistroComponent } from './shared/controle-de-registro/controle-de-registro.component';
import { ControleDeEnvioComponent } from './shared/controle-de-envio/controle-de-envio.component';
import { SolicitarEnvioComponent } from './shared/solicitar-envio/solicitar-envio.component';
import { NoIntegrationComponent } from './shared/no-integration/no-integration.component';
import { ControleRegistrosR1070Component } from './core/_modal/controle-registros/controle-registros-r1070/controle-registros-r1070.component';
import { ControleRegistrosR2010Component } from './core/_modal/controle-registros/controle-registros-r2010/controle-registros-r2010.component';
import { ControleRegistrosR2060Component } from './core/_modal/controle-registros/controle-registros-r2060/controle-registros-r2060.component';
import { PainelDeConsultaComponent } from './painel-de-consulta/painel-de-consulta.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: 'painel-de-controle', component: PainelDeControleComponent},
        {path: 'controle-de-registros', component: ControleDeRegistroComponent, children: [
            {path: 'controle-de-registros-R1070', component: ControleRegistrosR1070Component},
            {path: 'controle-de-registros-R2010', component: ControleRegistrosR2010Component},
            {path: 'controle-de-registros-R2060', component: ControleRegistrosR2060Component},
            {path: 'no-integration', component: NoIntegrationComponent}
        ]},
        {path: 'controle-envio', component: ControleDeEnvioComponent},
        {path: 'solicitar-envio', component: SolicitarEnvioComponent},
        {path: 'painel-consulta', component: PainelDeConsultaComponent}
    ]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]