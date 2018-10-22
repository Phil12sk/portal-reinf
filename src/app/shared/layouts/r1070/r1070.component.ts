import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-r1070',
  templateUrl: './r1070.component.html',
  styleUrls: ['./r1070.component.css']
})
export class R1070Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  isLoaded: boolean = true
  r1070Form: FormGroup

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
    this.r1070Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(''),
      NM_LAYOUT: this.formBuilder.control(''),
      CD_SIS_ORIG: this.formBuilder.control(''),
      DT_MOVIMENT: this.formBuilder.control(''),
      TP_INSCRI: this.formBuilder.control(''),
      NR_INSCRI: this.formBuilder.control(''),
      TP_PROCES: this.formBuilder.control(''),
      NR_PROCES: this.formBuilder.control(''),
      DT_INI_VAL: this.formBuilder.control(''),
      DT_FIM_VAL: this.formBuilder.control(''),
      IN_AUTORIA: this.formBuilder.control(''),
      CD_SUSPEN: this.formBuilder.control(''),
      IN_SUSPEN: this.formBuilder.control(''),
      DT_DECISAO: this.formBuilder.control(''),
      IN_DEPOSIT: this.formBuilder.control(''),
      CD_UF: this.formBuilder.control(''),
      CD_MUNIC: this.formBuilder.control(''),
      CD_VARA: this.formBuilder.control(''),
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