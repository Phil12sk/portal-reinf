import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  teste: boolean;

  constructor(
      private formBuilder: FormBuilder, 
      private dadosService: DadosService) { }

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
    
  }

  ngOnInit() {
    this.dadosService.objDados;
    this.r1000Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(this.dadosService.objDados.TP_OPER),
      CD_SIS_ORIG: this.formBuilder.control(this.dadosService.objDados.CD_SIS_ORIG),
      TP_INSCRI: this.formBuilder.control(this.dadosService.objDados.TP_INSCRI),
      NR_INSCRI: this.formBuilder.control(this.dadosService.objDados.NR_INSCRI),
      CD_CNPJ_EMP: this.formBuilder.control(this.dadosService.objDados.CD_CNPJ_EMP),
      NM_LAYOUT: this.formBuilder.control(this.dadosService.objDados.NM_LAYOUT),
      DT_MOVIMENT: this.formBuilder.control(this.dadosService.objDados.DT_MOVIMENT),
      DT_INI_VAL: this.formBuilder.control(this.dadosService.objDados.DT_INI_VAL),
      DT_FIM_VAL: this.formBuilder.control(this.dadosService.objDados.DT_FIM_VAL),
      CD_CLASSTRIB: this.formBuilder.control(this.dadosService.objDados.CD_CLASSTRIB),
      IN_ESCRITUR: this.formBuilder.control(this.dadosService.objDados.IN_ESCRITUR),
      IN_DESONERA: this.formBuilder.control(this.dadosService.objDados.IN_DESONERA),
      IN_ACO_MULT: this.formBuilder.control(this.dadosService.objDados.IN_ACO_MULT),
      IN_SIT_PJ: this.formBuilder.control(this.dadosService.objDados.IN_SIT_PJ),
      NM_RESP_CON: this.formBuilder.control(this.dadosService.objDados.NM_RESP_CON),
      CD_CPF_CON: this.formBuilder.control(this.dadosService.objDados.CD_CPF_CON),
      CD_TEL_CON: this.formBuilder.control(this.dadosService.objDados.CD_TEL_CON),
      CD_CEL_CON: this.formBuilder.control(this.dadosService.objDados.CD_CEL_CON),
      NM_EMAIL_CON: this.formBuilder.control(this.dadosService.objDados.NM_EMAIL_CON),
      NM_RAZAO_EMP: this.formBuilder.control(this.dadosService.objDados.NM_RAZAO_EMP),
      NM_CON_EMP: this.formBuilder.control(this.dadosService.objDados.NM_CON_EMP),
      CD_TEL_EMP: this.formBuilder.control(this.dadosService.objDados.CD_TEL_EMP),
      NM_EMAIL_EMP: this.formBuilder.control(this.dadosService.objDados.NM_EMAIL_EMP),
      ID_EFR: this.formBuilder.control(this.dadosService.objDados.ID_EFR),
      CD_CNPJ_EFR: this.formBuilder.control(this.dadosService.objDados.CD_CNPJ_EFR),
      FILLER: this.formBuilder.control(this.dadosService.objDados.FILLER)
    });
    
    $('#xxx').click();
  }
}