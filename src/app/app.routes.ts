import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { EventosPendentesComponent } from './eventos-pendentes/eventos-pendentes.component';
import { ControleIntegracoesComponent } from './controle-integracoes/controle-integracoes.component';
import { ControleEnvioComponent } from './controle-envio/controle-envio.component';
import { SolicitarEnvioComponent } from './solicitar-envio/solicitar-envio.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: 'eventos-pendentes', component: EventosPendentesComponent},
        {path: 'controle-integracoes', component: ControleIntegracoesComponent},
        {path: 'controle-envio', component: ControleEnvioComponent},
        {path: 'solicitar-envio', component: SolicitarEnvioComponent}
    ]}
]