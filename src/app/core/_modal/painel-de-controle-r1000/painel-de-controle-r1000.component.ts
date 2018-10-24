import { Component, OnInit } from '@angular/core';

import { EvtPendente } from '../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r1000',
  templateUrl: './painel-de-controle-r1000.component.html',
  styleUrls: ['./painel-de-controle-r1000.component.css']
})
export class PainelDeControleR1000Component implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#xxx').click();
    
  }

}
