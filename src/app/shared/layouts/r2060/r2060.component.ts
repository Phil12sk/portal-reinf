import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-r2060',
  templateUrl: './r2060.component.html',
  styleUrls: ['./r2060.component.css']
})
export class R2060Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  isLoaded: boolean = true
  r2060Form: FormGroup

  consultLayout(){
    /* 
      this.r1000Service.getInfos()
      .subscribe(resp => {
        this.r1000Form.setValue({
          TP_OPER: resp.TP_OPER,
          NM_LAYOUT: resp.NM_LAYOUT,
          DT_MOVIMENT: resp.DT_MOVIMENT,
          DT_INI_VAL: resp.DT_INI_VAL,
          DT_FIM_VAL: resp.DT_FIM_VAL,
          CD_CLASSTRIB: resp.CD_CLASSTRIB,
          IN_ESCRITUR: resp.IN_ESCRITUR,
          IN_DESONERA: resp.IN_DESONERA,
          IN_ACO_MULT: resp.IN_ACO_MULT,
          IN_SIT_PJ: resp.IN_SIT_PJ,
          NM_RESP_CON: resp.NM_RESP_CON,
          CD_CPF_CON: resp.CD_CPF_CON,
          CD_TEL_CON: resp.CD_TEL_CON,
          CD_CEL_CON: resp.CD_CEL_CON,
          NM_EMAIL_CON: resp.NM_EMAIL_CON,
          NM_RAZAO_EMP: resp.NM_RAZAO_EMP,
          NM_CON_EMP: resp.NM_CON_EMP,
          CD_TEL_EMP: resp.CD_TEL_EMP,
          NM_EMAIL_EMP: resp.NM_EMAIL_EMP,
          ID_EFR: resp.ID_EFR,
          CD_CNPJ_EFR: resp.CD_CNPJ_EFR,
          FILLER: resp.FILLER
        })
      })
    */
  }

  ngOnInit() {
    this.r2060Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(''),
      NM_LAYOUT: this.formBuilder.control(''),
      CD_SIS_ORIG: this.formBuilder.control(''),
      CD_PRODUTO: this.formBuilder.control(''),
      CD_RETENCAO: this.formBuilder.control(''),
      DT_MOVIMENT: this.formBuilder.control(''),
      TP_INSCRI: this.formBuilder.control(''),
      NR_INSCRI: this.formBuilder.control(''),
      TP_INSC_EST: this.formBuilder.control(''),
      NR_INSC_EST: this.formBuilder.control(''),
      VL_TOT_RECBRUTA: this.formBuilder.control(''),
      VL_TOT_APUESTAB: this.formBuilder.control(''),
      VL_TOT_EXIGSUSP: this.formBuilder.control(''),
      CD_ATI_ECON: this.formBuilder.control(''),
      VL_REC_ATIV: this.formBuilder.control(''),
      VL_EXC_REC: this.formBuilder.control(''),
      VL_ADI_REC: this.formBuilder.control(''),
      VL_BASE_CALC: this.formBuilder.control(''),
      VL_PREV_REC: this.formBuilder.control(''),
      VL_PROC_SUSP: this.formBuilder.control(''),
      TP_PROCESSO: this.formBuilder.control(''),
      NR_PROCESSO: this.formBuilder.control(''),
      CD_IND_SUSP: this.formBuilder.control(''),
      TP_AJUSTE: this.formBuilder.control(''),
      CD_AJUSTE: this.formBuilder.control(''),
      VL_AJUSTE: this.formBuilder.control(''),
      DESC_AJUSTE: this.formBuilder.control(''),
      DT_AJUSTE: this.formBuilder.control(''),
      IND_PROCES: this.formBuilder.control(''),
      REG_INCONS: this.formBuilder.control(''),
      BATE_INCONS: this.formBuilder.control(''),
      CD_ITGR: this.formBuilder.control(''),
      NR_SEQU_ITGR: this.formBuilder.control(''),
      CD_SITU_ITGR: this.formBuilder.control(''),
      DT_CTRL_ITGR: this.formBuilder.control(''),
      FILLER: this.formBuilder.control('')
    });
    this.consultLayout();
    $('#xxx').click();
  }
}