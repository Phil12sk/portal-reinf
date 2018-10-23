import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $:  any

@Component({
  selector: 'app-r2010',
  templateUrl: './r2010.component.html',
  styleUrls: ['./r2010.component.css']
})
export class R2010Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  isLoaded: boolean = true
  r2010Form: FormGroup

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
    this.r2010Form = this.formBuilder.group({
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
      IN_OBRA: this.formBuilder.control(''),
      NR_CNPJ_PRE: this.formBuilder.control(''),
      VL_TOT_BRUTO: this.formBuilder.control(''),
      VL_TOT_BASERET: this.formBuilder.control(''),
      VL_TOT_RETPRINC: this.formBuilder.control(''),
      VL_TOT_RETADIC: this.formBuilder.control(''),
      VL_TOT_NRETPRI: this.formBuilder.control(''),
      VL_TOT_NRETADIC: this.formBuilder.control(''),
      IN_CPRB: this.formBuilder.control(''),
      NR_SERIE: this.formBuilder.control(''),
      NR_DOCTO: this.formBuilder.control(''),
      DT_EMISSAONF: this.formBuilder.control(''),
      VL_BRUTO: this.formBuilder.control(''),
      NM_OBS: this.formBuilder.control(''),
      TP_SERVICO: this.formBuilder.control(''),
      VL_BASERET: this.formBuilder.control(''),
      VL_RETENCAO: this.formBuilder.control(''),
      VL_RETSUB: this.formBuilder.control(''),
      VL_NRETPRINC: this.formBuilder.control(''),
      VL_SERVICOS15: this.formBuilder.control(''),
      VL_SERVICOS20: this.formBuilder.control(''),
      VL_SERVICOS25: this.formBuilder.control(''),
      VL_ADICIONAL: this.formBuilder.control(''),
      VL_NRETADIC: this.formBuilder.control(''),
      TP_PROC_RET: this.formBuilder.control(''),
      NR_PROC_RET: this.formBuilder.control(''),
      CD_SUSP_PRIN: this.formBuilder.control(''),
      VL_PRINC: this.formBuilder.control(''),
      TP_PROC_ADIC: this.formBuilder.control(''),
      NR_PROC_ADIC: this.formBuilder.control(''),
      CD_SUSP_ADIC: this.formBuilder.control(''),
      VL_ADIC: this.formBuilder.control(''),
      IND_PROCES: this.formBuilder.control(''),
      REG_INCONS: this.formBuilder.control(''),
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