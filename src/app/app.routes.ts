import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { EventosPendentesComponent } from './eventos-pendentes/eventos-pendentes.component';
import { ControleIntegracoesComponent } from './shared/controle-integracoes/controle-integracoes.component';
import { ControleEnvioComponent } from './shared/controle-envio/controle-envio.component';
import { SolicitarEnvioComponent } from './shared/solicitar-envio/solicitar-envio.component';
import { R2010Component } from './shared/layouts/r2010/r2010.component';
import { NoIntegrationComponent } from './shared/no-integration/no-integration.component';
import { TableEnviosComponent } from './shared/table-envios/table-envios.component';

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
    ]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]