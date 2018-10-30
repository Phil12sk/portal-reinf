import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { R2060Model } from '../../../_model/r2060.model';

@Component({
  selector: 'app-controle-registros-r2060',
  templateUrl: './controle-registros-r2060.component.html',
  styleUrls: ['./controle-registros-r2060.component.css']
})
export class ControleRegistrosR2060Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  @Input() receber: any;
  ableTab: boolean = true
  r2060Form: FormGroup
  r2060: R2060Model = {
    TP_OPER: '1',
    NM_LAYOUT: 'R2060',
    CD_SIS_ORIG: '001',
    CD_PRODUTO: '1234',
    CD_RETENCAO: '12345',
    DT_MOVIMENT: '20181030',
    TP_INSCRI: '1',
    NR_INSCRI: '30450997000142',
    TP_INSC_EST: '1',
    NR_INSC_EST: '30450997000142',
    VL_TOT_RECBRUTA: '150000',
    VL_TOT_APUESTAB: '150000',
    VL_TOT_EXIGSUSP: '150000',
    CD_ATI_ECON: '12345678',
    VL_REC_ATIV: '150000',
    VL_EXC_REC: '150000',
    VL_ADI_REC: '150000',
    VL_BASE_CALC: '150000',
    VL_PREV_REC: '150000',
    VL_PROC_SUSP: '150000',
    TP_PROCESSO: '1',
    NR_PROCESSO: '123456789012345678901',
    CD_IND_SUSP: '12345678901234',
    TP_AJUSTE: '0',
    CD_AJUSTE: '02',
    VL_AJUSTE: '150000',
    DESC_AJUSTE: 'xxxxxxxx',
    DT_AJUSTE: '201810'
  }
  changeModal(){
    this.ableTab = false
  }

  changeVar(){
    this.ableTab = true;
  }
  ngOnInit() {
    this.r2060Form = this.fb.group({
      TP_OPER: this.fb.control(this.r2060.TP_OPER),
      NM_LAYOUT: this.fb.control(this.r2060.NM_LAYOUT),
      CD_SIS_ORIG: this.fb.control(this.r2060.CD_SIS_ORIG),
      CD_PRODUTO: this.fb.control(this.r2060.CD_PRODUTO),
      CD_RETENCAO: this.fb.control(this.r2060.CD_RETENCAO),
      DT_MOVIMENT: this.fb.control(this.r2060.DT_MOVIMENT),
      TP_INSCRI: this.fb.control(this.r2060.TP_INSCRI),
      NR_INSCRI: this.fb.control(this.r2060.NR_INSCRI),
      TP_INSC_EST: this.fb.control(this.r2060.TP_INSC_EST),
      NR_INSC_EST: this.fb.control(this.r2060.NR_INSC_EST),
      VL_TOT_RECBRUTA: this.fb.control(this.r2060.VL_TOT_RECBRUTA),
      VL_TOT_APUESTAB: this.fb.control(this.r2060.VL_TOT_APUESTAB),
      VL_TOT_EXIGSUSP: this.fb.control(this.r2060.VL_TOT_EXIGSUSP),
      CD_ATI_ECON: this.fb.control(this.r2060.CD_ATI_ECON),
      VL_REC_ATIV: this.fb.control(this.r2060.VL_REC_ATIV),
      VL_EXC_REC: this.fb.control(this.r2060.VL_EXC_REC),
      VL_ADI_REC: this.fb.control(this.r2060.VL_ADI_REC),
      VL_BASE_CALC: this.fb.control(this.r2060.VL_BASE_CALC),
      VL_PREV_REC: this.fb.control(this.r2060.VL_PREV_REC),
      VL_PROC_SUSP: this.fb.control(this.r2060.VL_PROC_SUSP),
      TP_PROCESSO: this.fb.control(this.r2060.TP_PROCESSO),
      NR_PROCESSO: this.fb.control(this.r2060.NR_PROCESSO),
      CD_IND_SUSP: this.fb.control(this.r2060.CD_IND_SUSP),
      TP_AJUSTE: this.fb.control(this.r2060.TP_AJUSTE),
      CD_AJUSTE: this.fb.control(this.r2060.CD_AJUSTE),
      VL_AJUSTE: this.fb.control(this.r2060.VL_AJUSTE),
      DESC_AJUSTE: this.fb.control(this.r2060.DESC_AJUSTE),
      DT_AJUSTE: this.fb.control(this.r2060.DT_AJUSTE)
    })
  }
}