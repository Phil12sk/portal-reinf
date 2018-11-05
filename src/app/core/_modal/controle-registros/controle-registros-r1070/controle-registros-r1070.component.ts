import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgModel, FormControlName} from '@angular/forms'
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
    private fb: FormBuilder, 
    private router: Router, 
    private dadosService: DadosService) { }

  ableTab: boolean = true
  r1070Form: FormGroup
  r1070: R1070Model = {
    TP_OPER: '1',
    NM_LAYOUT: 'R107',
    CD_SIS_ORIG: 'XXX',
    DT_MOVIMENT: '20181230',
    TP_INSCRI: '1',
    NR_INSCRI: '30450997000142',
    TP_PROCES: '2',
    NR_PROCES: '123456789012345678901',
    DT_INI_VAL: '201809',
    DT_FIM_VAL: '201810',
    IN_AUTORIA: '1',
    CD_SUSPEN: '12345678901234',
    IN_SUSPEN: '01',
    DT_DECISAO: '201810',
    IN_DEPOSIT: 'S',
    CD_UF: 'SP',
    CD_MUNIC: '001',
    CD_VARA: '01'
  };

  changeModal(){
    this.ableTab = false
  }

  changeVar(){
    this.ableTab = true;
  }

  ngOnInit() {
    this.r1070Form = this.fb.group({
      TP_OPER: this.fb.control(this.r1070.TP_OPER, [Validators.required]),
      NM_LAYOUT: this.fb.control(this.r1070.NM_LAYOUT, [Validators.minLength(5)]),
      CD_SIS_ORIG: this.fb.control(this.r1070.CD_SIS_ORIG, Validators.required),
      DT_MOVIMENT: this.fb.control(this.r1070.DT_MOVIMENT),
      TP_INSCRI: this.fb.control(this.r1070.TP_INSCRI, [Validators.required]),
      NR_INSCRI: this.fb.control(this.r1070.NR_INSCRI, [Validators.required]),
      TP_PROCES: this.fb.control(this.r1070.TP_PROCES, [Validators.required]),
      NR_PROCES: this.fb.control(this.r1070.NR_PROCES, [Validators.required]),
      DT_INI_VAL: this.fb.control(this.r1070.DT_INI_VAL),
      DT_FIM_VAL: this.fb.control(this.r1070.DT_FIM_VAL),
      IN_AUTORIA: this.fb.control(this.r1070.IN_AUTORIA),
      CD_SUSPEN: this.fb.control(this.r1070.CD_SUSPEN, [Validators.required]),
      IN_SUSPEN: this.fb.control(this.r1070.IN_SUSPEN),
      DT_DECISAO: this.fb.control(this.r1070.DT_DECISAO, [Validators.minLength(8)]),
      IN_DEPOSIT: this.fb.control(this.r1070.IN_DEPOSIT),
      CD_UF: this.fb.control(this.r1070.CD_UF),
      CD_MUNIC: this.fb.control(this.r1070.CD_MUNIC),
      CD_VARA: this.fb.control(this.r1070.CD_VARA)
    })
    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });
  }
}