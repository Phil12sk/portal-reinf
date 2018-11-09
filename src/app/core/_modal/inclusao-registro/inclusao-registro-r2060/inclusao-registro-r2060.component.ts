import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inclusao-registro-r2060',
  templateUrl: './inclusao-registro-r2060.component.html',
  styleUrls: ['./inclusao-registro-r2060.component.css']
})
export class InclusaoRegistroR2060Component implements OnInit {

  constructor( private formBuilder: FormBuilder) { }
  
  r2060Form: FormGroup;
  today: number = Date.now();

  ngOnInit() {
    this.r2060Form = this.formBuilder.group({
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
      VL_TOT_RECBRUTA: this.formBuilder.control(""),
      VL_TOT_APUESTAB: this.formBuilder.control(""),
      VL_TOT_EXIGSUSP: this.formBuilder.control(""),
      CD_ATI_ECON: this.formBuilder.control(""),
      VL_REC_ATIV: this.formBuilder.control(""),
      VL_EXC_REC: this.formBuilder.control(""),
      VL_ADI_REC: this.formBuilder.control(""),
      VL_BASE_CALC: this.formBuilder.control(""),
      VL_PREV_REC: this.formBuilder.control(""),
      VL_PROC_SUSP: this.formBuilder.control(""),
      TP_PROCESSO: this.formBuilder.control(""),
      NR_PROCESSO: this.formBuilder.control(""),
      CD_IND_SUSP: this.formBuilder.control(""),
      TP_AJUSTE: this.formBuilder.control(""),
      CD_AJUSTE: this.formBuilder.control(""),
      VL_AJUSTE: this.formBuilder.control(""),
      DESC_AJUSTE: this.formBuilder.control(""),
      DT_AJUSTE: this.formBuilder.control(""),
      IND_PROCES: this.formBuilder.control(""),
      REG_INCONS: this.formBuilder.control(""),
      BATE_INCONS: this.formBuilder.control(""),
      CD_ITGR: this.formBuilder.control(""),
      NR_SEQU_ITGR: this.formBuilder.control(""),
      CD_SITU_ITGR: this.formBuilder.control(""),
      DT_CTRL_ITGR: this.formBuilder.control(""),
      FILLER: this.formBuilder.control("")
    });

  }

}
