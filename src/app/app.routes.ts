import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { EventosPendentesComponent } from './eventos-pendentes/eventos-pendentes.component';
import { ControleIntegracoesComponent } from './controle-integracoes/controle-integracoes.component';
import { ControleEnvioComponent } from './controle-envio/controle-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';
import { R2010Component } from './r2010/r2010.component';
import { NoIntegrationComponent } from './no-integration/no-integration.component';
import { TableEnviosComponent } from './table-envios/table-envios.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: 'eventos-pendentes', component: EventosPendentesComponent},
        {path: 'controle-integracoes', component: ControleIntegracoesComponent, children: [
            {path: 'R2010', component: R2010Component},
            {path: 'no-integration', component: NoIntegrationComponent}
        ]},
        {path: 'controle-envio', component: ControleEnvioComponent, children:[
            {path: 'table-enviados', component: TableEnviosComponent}
        ]},
        {path: 'solicitar-envio', component: SolicitarEnvioComponent}
    ]}
]