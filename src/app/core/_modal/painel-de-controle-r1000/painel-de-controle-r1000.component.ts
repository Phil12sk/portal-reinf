import { Component, OnInit } from '@angular/core';

import { EvtPendente } from '../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { R1000Model } from '../../../core/_model/r1000.model';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r1000',
  templateUrl: './painel-de-controle-r1000.component.html',
  styleUrls: ['./painel-de-controle-r1000.component.css']
})
export class PainelDeControleR1000Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }

  r1000: R1000Model;
  contribuinte: any;
  periodo: any;

  ngOnInit() {

    this.contribuinte = this.dadosService.objDados.contribuinte;
    this.periodo = this.dadosService.objDados.periodo;


    this.r1000 = {
      TP_OPER: '1',
      NM_LAYOUT: 'R1000',
      CD_SIS_ORIG: '123',
      DT_MOVIMENT: '2018.10.01',
      TP_INSCRI: '1',
      NR_INSCRI: '12345678901234',
      DT_INI_VAL: '2018-09',
      DT_FIM_VAL: '2018-10',
      CD_CLASSTRIB: '01',
      IN_ESCRITUR: '0',
      IN_DESONERA: '0',
      IN_ACO_MULT: '1',
      IN_SIT_PJ: '3',
      NM_RESP_CON: 'José da Silva',
      CD_CPF_CON: '12345678900',
      CD_TEL_CON: '551125526776',
      CD_CEL_CON: '5511987654321',
      NM_EMAIL_CON: 'contato@teste.com',
      CD_CNPJ_EMP: '00123456000167',
      NM_RAZAO_EMP: 'Empresa Testa LTDA',
      NM_CON_EMP: 'João José',
      CD_TEL_EMP: '5511987654321',
      NM_EMAIL_EMP: 'empresa@teste.com.br',
      ID_EFR: '1',
      CD_CNPJ_EFR: '00123456000167',     
    };

    $('#xxx').click();

    $('.pane-hScroll').scroll(function() {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });
    
  }

}
