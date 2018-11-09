import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inclusao-registro-r2010',
  templateUrl: './inclusao-registro-r2010.component.html',
  styleUrls: ['./inclusao-registro-r2010.component.css']
})
export class InclusaoRegistroR2010Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder) { }

  r2010Form: FormGroup;
  today: number = Date.now();

  ngOnInit() {
    this.r2010Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(""),
      NM_LAYOUT: this.formBuilder.control(""),
      CD_SIS_ORIG: this.formBuilder.control(""),
      CD_PRODUTO: this.formBuilder.control(""),
      CD_RETENCAO: this.formBuilder.control(""),
      DT_MOVIMENT: this.formBuilder.control(""),
      TP_INSCRI: this.formBuilder.control(""),
      NR_INSCRI: this.formBuilder.control(""),
      TP_INSC_EST: this.formBuilder.control(""),
      NR_INSC_EST: this.formBuilder.control(""),
      IN_OBRA: this.formBuilder.control(""),
      NR_CNPJ_PRE: this.formBuilder.control(""),
      VL_TOT_BRUTO: this.formBuilder.control(""),
      VL_TOT_BASERET: this.formBuilder.control(""),
      VL_TOT_RETPRINC: this.formBuilder.control(""),
      VL_TOT_RETADIC: this.formBuilder.control(""),
      VL_TOT_NRETPRI: this.formBuilder.control(""),
      VL_TOT_NRETADIC: this.formBuilder.control(""),
      IN_CPRB: this.formBuilder.control(""),
      NR_SERIE: this.formBuilder.control(""),
      NR_DOCTO: this.formBuilder.control(""),
      DT_EMISSAONF: this.formBuilder.control(""),
      VL_BRUTO: this.formBuilder.control(""),
      NM_OBS: this.formBuilder.control(""),
      TP_SERVICO: this.formBuilder.control(""),
      VL_BASERET: this.formBuilder.control(""),
      VL_RETENCAO: this.formBuilder.control(""),
      VL_RETSUB: this.formBuilder.control(""),
      VL_NRETPRINC: this.formBuilder.control(""),
      VL_SERVICOS15: this.formBuilder.control(""),
      VL_SERVICOS20: this.formBuilder.control(""),
      VL_SERVICOS25: this.formBuilder.control(""),
      VL_ADICIONAL: this.formBuilder.control(""),
      VL_NRETADIC: this.formBuilder.control(""),
      TP_PROC_RET: this.formBuilder.control(""),
      NR_PROC_RET: this.formBuilder.control(""),
      CD_SUSP_PRIN: this.formBuilder.control(""),
      VL_PRINC: this.formBuilder.control(""),
      TP_PROC_ADIC: this.formBuilder.control(""),
      NR_PROC_ADIC: this.formBuilder.control(""),
      CD_SUSP_ADIC: this.formBuilder.control(""),
      VL_ADIC: this.formBuilder.control(""),
      IND_PROCES: this.formBuilder.control(""),
      REG_INCONS: this.formBuilder.control(""),
      CD_ITGR: this.formBuilder.control(""),
      NR_SEQU_ITGR: this.formBuilder.control(""),
      CD_SITU_ITGR: this.formBuilder.control(""),
      DT_CTRL_ITGR: this.formBuilder.control(""),
      FILLER: this.formBuilder.control("")
    });
  }
}