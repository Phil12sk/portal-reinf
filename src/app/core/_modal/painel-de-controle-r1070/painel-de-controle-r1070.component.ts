import { Component, OnInit } from '@angular/core';

import { EvtPendente } from '../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { R1070Model } from '../../../core/_model/r1070.model';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r1070',
  templateUrl: './painel-de-controle-r1070.component.html',
  styleUrls: ['./painel-de-controle-r1070.component.css']
})
export class PainelDeControleR1070Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }

  r1070: R1070Model;
  contribuinte: any;
  periodo: any;

  ngOnInit() {

    this.contribuinte = this.dadosService.objDados.contribuinte;
    this.periodo = this.dadosService.objDados.periodo;


    this.r1070 = {
      TP_OPER: 'xxxxxxxxx',
      NM_LAYOUT: 'xxxxxxxxx',
      CD_SIS_ORIG: 'xxxxxxxxx',
      DT_MOVIMENT: 'xxxxxxxxx',
      TP_INSCRI: 'xxxxxxxxx',
      NR_INSCRI: 'xxxxxxxxx',
      TP_PROCES: 'xxxxxxxxx',
      NR_PROCES: 'xxxxxxxxx',
      DT_INI_VAL: 'xxxxxxxxx',
      DT_FIM_VAL: 'xxxxxxxxx',
      IN_AUTORIA: 'xxxxxxxxx',
      CD_SUSPEN: 'xxxxxxxxx',
      IN_SUSPEN: 'xxxxxxxxx',
      DT_DECISAO: 'xxxxxxxxx',
      IN_DEPOSIT: 'xxxxxxxxx',
      CD_UF: 'xxxxxxxxx',
      CD_MUNIC: 'xxxxxxxxx',
      CD_VARA: 'xxxxxxxxx'
    };

    $('#xxx').click();

    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });

  }

}
