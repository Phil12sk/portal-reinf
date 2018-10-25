import { Component, OnInit } from '@angular/core';

import { EvtPendente } from '../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { R2060Model } from '../../../core/_model/r2060.model';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r2060',
  templateUrl: './painel-de-controle-r2060.component.html',
  styleUrls: ['./painel-de-controle-r2060.component.css']
})
export class PainelDeControleR2060Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }
  
    r2060: R2060Model;
  
    contribuinte: any;
    periodo: any;
  
    ngOnInit() {
  
      this.contribuinte = this.dadosService.objDados.contribuinte;
      this.periodo = this.dadosService.objDados.periodo;
  
  
      this.r2060 = {
        TP_OPER:'XXXXXXXXXX',
        NM_LAYOUT:'XXXXXXXXXX',
        CD_SIS_ORIG:'XXXXXXXXXX',
        CD_PRODUTO:'XXXXXXXXXX',
        CD_RETENCAO:'XXXXXXXXXX',
        DT_MOVIMENT:'XXXXXXXXXX',
        TP_INSCRI:'XXXXXXXXXX',
        NR_INSCRI:'XXXXXXXXXX',
        TP_INSC_EST:'XXXXXXXXXX',
        NR_INSC_EST:'XXXXXXXXXX',
        VL_TOT_RECBRUTA:'XXXXXXXXXX',
        VL_TOT_APUESTAB:'XXXXXXXXXX',
        VL_TOT_EXIGSUSP:'XXXXXXXXXX',
        CD_ATI_ECON:'XXXXXXXXXX',
        VL_REC_ATIV:'XXXXXXXXXX',
        VL_EXC_REC:'XXXXXXXXXX',
        VL_ADI_REC:'XXXXXXXXXX',
        VL_BASE_CALC:'XXXXXXXXXX',
        VL_PREV_REC:'XXXXXXXXXX',
        VL_PROC_SUSP:'XXXXXXXXXX',
        TP_PROCESSO:'XXXXXXXXXX',
        NR_PROCESSO:'XXXXXXXXXX',
        CD_IND_SUSP:'XXXXXXXXXX',
        TP_AJUSTE:'XXXXXXXXXX',
        CD_AJUSTE:'XXXXXXXXXX',
        VL_AJUSTE:'XXXXXXXXXX',
        DESC_AJUSTE:'XXXXXXXXXX',
        DT_AJUSTE:'XXXXXXXXXX' 
      }
  
      $('#xxx').click();
  
      $('.pane-hScroll').scroll(function() {
        $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
      });
      
    }
}




