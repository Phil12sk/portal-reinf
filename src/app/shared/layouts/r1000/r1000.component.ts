import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
////////
import { DadosService } from '../../../core/_service/dados.service';
///////////////
declare var $: any;

@Component({
  selector: 'app-r1000',
  templateUrl: './r1000.component.html',
  styleUrls: ['./r1000.component.css']
})
export class R1000Component implements OnInit {
  isLoaded: boolean = true
  r1000Form: FormGroup
  @Input() ola: any


  ////////////
  contribuinte: any;
  ///////////

  constructor(private formBuilder: FormBuilder, private dadosService: DadosService) { }

  updateLayout(){
    /*this.r1000Service.updateInfos()
    .subscribe(resp => {
      this.router.navigate(['/home/controle-integracoes/'])
    }) */
  }

  deleteLayout(){
    /*this.r1000Service.deleteInfos()
    .subscribe(resp => {
      this.router.navigate(['/home/controle-integracoes/'])
    }) */
  }

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

    this.contribuinte = this.dadosService.objDados.contribuinte;
    console.log("Contribuinte: " + this.contribuinte);


    this.r1000Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(''),
      NM_LAYOUT: this.formBuilder.control(''),
      DT_MOVIMENT: this.formBuilder.control(''),
      DT_INI_VAL: this.formBuilder.control(''),
      DT_FIM_VAL: this.formBuilder.control(''),
      CD_CLASSTRIB: this.formBuilder.control(''),
      IN_ESCRITUR: this.formBuilder.control(''),
      IN_DESONERA: this.formBuilder.control(''),
      IN_ACO_MULT: this.formBuilder.control(''),
      IN_SIT_PJ: this.formBuilder.control(''),
      NM_RESP_CON: this.formBuilder.control(''),
      CD_CPF_CON: this.formBuilder.control(''),
      CD_TEL_CON: this.formBuilder.control(''),
      CD_CEL_CON: this.formBuilder.control(''),
      NM_EMAIL_CON: this.formBuilder.control(''),
      NM_RAZAO_EMP: this.formBuilder.control(''),
      NM_CON_EMP: this.formBuilder.control(''),
      CD_TEL_EMP: this.formBuilder.control(''),
      NM_EMAIL_EMP: this.formBuilder.control(''),
      ID_EFR: this.formBuilder.control(''),
      CD_CNPJ_EFR: this.formBuilder.control(''),
      FILLER: this.formBuilder.control('')
    });
    this.consultLayout();
    $('#xxx').click();
  }
}