import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../../../_service/dados.service';
import { R1070Model } from '../../../_model/r1070.model';
declare var $: any

@Component({
  selector: 'app-controle-registros-r1070',
  templateUrl: './controle-registros-r1070.component.html',
  styleUrls: ['./controle-registros-r1070.component.css']
})
export class ControleRegistrosR1070Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private dadosService: DadosService) { }

  r1070: R1070Model = {
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
  contribuinte: any;
  periodo: any;

  ngOnInit() {

    $('#xxx').click();

    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });
  }

}
