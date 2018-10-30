import { Component, OnInit, Input } from '@angular/core';
import { R2010Model } from '../../../_model/r2010.model';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any

@Component({
  selector: 'app-controle-registros-r2010',
  templateUrl: './controle-registros-r2010.component.html',
  styleUrls: ['./controle-registros-r2010.component.css']
})
export class ControleRegistrosR2010Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  @Input() receber: any;
  ableTab: boolean = true
  r2010Form: FormGroup
  r2010: R2010Model = {
    TP_OPER: '2',
    NM_LAYOUT: 'R2010',
    CD_SIS_ORIG: '001',
    CD_PRODUTO: '1234',
    CD_RETENCAO: '12345',
    DT_MOVIMENT: '20181030',
    TP_INSCRI: '1',
    NR_INSCRI: '30450997000142',
    TP_INSC_EST: '1',
    NR_INSC_EST: '30450997000142',
    IN_OBRA: '0',
    NR_CNPJ_PRE: '30450997000142',
    VL_TOT_BRUTO: '150000',
    VL_TOT_BASERET: '150000',
    VL_TOT_RETPRINC: '150000',
    VL_TOT_RETADIC: '150000',
    VL_TOT_NRETPRI: '150000',
    VL_TOT_NRETADIC: '150000',
    IN_CPRB: '0',
    NR_SERIE: '12345',
    NR_DOCTO: '123456789012345',
    DT_EMISSAONF: '20181030',
    VL_BRUTO: '150000',
    NM_OBS: 'Observação',
    TP_SERVICO: '150000',
    VL_BASERET: '150000',
    VL_RETENCAO: '150000',
    VL_RETSUB: '150000',
    VL_NRETPRINC: '150000',
    VL_SERVICOS15: '150000',
    VL_SERVICOS20: '150000',
    VL_SERVICOS25: '150000',
    VL_ADICIONAL: '150000',
    VL_NRETADIC: '150000',
    TP_PROC_RET: '1',
    NR_PROC_RET: '123456789012345678901',
    CD_SUSP_PRIN: '12345678901234',
    VL_PRINC: '150000',
    TP_PROC_ADIC: '1',
    NR_PROC_ADIC: '123456789012345678901',
    CD_SUSP_ADIC: '12345678901234'
  }

  changeModal(){
    this.ableTab = false
  }

  changeVar(){
    this.ableTab = true;
  }

  ngOnInit() {
    this.r2010Form = this.fb.group({
      TP_OPER: this.fb.control(this.r2010.TP_OPER),
      NM_LAYOUT: this.fb.control(this.r2010.NM_LAYOUT),
      CD_SIS_ORIG: this.fb.control(this.r2010.CD_SIS_ORIG),
      CD_PRODUTO: this.fb.control(this.r2010.CD_PRODUTO),
      CD_RETENCAO: this.fb.control(this.r2010.CD_RETENCAO),
      DT_MOVIMENT: this.fb.control(this.r2010.DT_MOVIMENT),
      TP_INSCRI: this.fb.control(this.r2010.TP_INSCRI),
      NR_INSCRI: this.fb.control(this.r2010.NR_INSCRI),
      TP_INSC_EST: this.fb.control(this.r2010.TP_INSC_EST),
      NR_INSC_EST: this.fb.control(this.r2010.NR_INSC_EST),
      IN_OBRA: this.fb.control(this.r2010.IN_OBRA),
      NR_CNPJ_PRE: this.fb.control(this.r2010.NR_CNPJ_PRE),
      VL_TOT_BRUTO: this.fb.control(this.r2010.VL_TOT_BRUTO),
      VL_TOT_BASERET: this.fb.control(this.r2010.VL_TOT_BASERET),
      VL_TOT_RETPRINC: this.fb.control(this.r2010.VL_TOT_RETPRINC),
      VL_TOT_RETADIC: this.fb.control(this.r2010.VL_TOT_RETADIC),
      VL_TOT_NRETPRI: this.fb.control(this.r2010.VL_TOT_NRETPRI),
      VL_TOT_NRETADIC: this.fb.control(this.r2010.VL_TOT_NRETADIC),
      IN_CPRB: this.fb.control(this.r2010.IN_CPRB),
      NR_SERIE: this.fb.control(this.r2010.NR_SERIE),
      NR_DOCTO: this.fb.control(this.r2010.NR_DOCTO),
      DT_EMISSAONF: this.fb.control(this.r2010.DT_EMISSAONF),
      VL_BRUTO: this.fb.control(this.r2010.VL_BRUTO),
      NM_OBS: this.fb.control(this.r2010.NM_OBS),
      TP_SERVICO: this.fb.control(this.r2010.TP_SERVICO),
      VL_BASERET: this.fb.control(this.r2010.VL_BASERET),
      VL_RETENCAO: this.fb.control(this.r2010.VL_RETENCAO),
      VL_RETSUB: this.fb.control(this.r2010.VL_RETSUB),
      VL_NRETPRINC: this.fb.control(this.r2010.VL_NRETPRINC),
      VL_SERVICOS15: this.fb.control(this.r2010.VL_SERVICOS15),
      VL_SERVICOS20: this.fb.control(this.r2010.VL_SERVICOS20),
      VL_SERVICOS25: this.fb.control(this.r2010.VL_SERVICOS25),
      VL_ADICIONAL: this.fb.control(this.r2010.VL_ADICIONAL),
      VL_NRETADIC: this.fb.control(this.r2010.VL_NRETADIC),
      TP_PROC_RET: this.fb.control(this.r2010.TP_PROC_RET),
      NR_PROC_RET: this.fb.control(this.r2010.NR_PROC_RET),
      CD_SUSP_PRIN: this.fb.control(this.r2010.CD_SUSP_PRIN),
      VL_PRINC: this.fb.control(this.r2010.VL_PRINC),
      TP_PROC_ADIC: this.fb.control(this.r2010.TP_PROC_ADIC),
      NR_PROC_ADIC: this.fb.control(this.r2010.NR_PROC_ADIC),
      CD_SUSP_ADIC: this.fb.control(this.r2010.CD_SUSP_ADIC),
      VL_ADIC: this.fb.control(this.r2010.VL_ADIC)
    })
    $('#xxx').click();
    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });
  }
}