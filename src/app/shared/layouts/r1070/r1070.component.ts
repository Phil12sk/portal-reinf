import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DadosService } from '../../../core/_service/dados.service';
declare var $: any;

@Component({
  selector: 'app-r1070',
  templateUrl: './r1070.component.html',
  styleUrls: ['./r1070.component.css']
})
export class R1070Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dadosService: DadosService) { }
  isLoaded: boolean = true
  r1070Form: FormGroup

  ngOnInit() {
    this.r1070Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(this.dadosService.objDados.TP_OPER),
      NM_LAYOUT: this.formBuilder.control(this.dadosService.objDados.NM_LAYOUT),
      CD_SIS_ORIG: this.formBuilder.control(this.dadosService.objDados.CD_SIS_ORIG),
      DT_MOVIMENT: this.formBuilder.control(this.dadosService.objDados.DT_MOVIMENT),
      TP_INSCRI: this.formBuilder.control(this.dadosService.objDados.TP_INSCRI),
      NR_INSCRI: this.formBuilder.control(this.dadosService.objDados.NR_INSCRI),
      TP_PROCES: this.formBuilder.control(this.dadosService.objDados.TP_PROCES),
      NR_PROCES: this.formBuilder.control(this.dadosService.objDados.NR_PROCES),
      DT_INI_VAL: this.formBuilder.control(this.dadosService.objDados.DT_INI_VAL),
      DT_FIM_VAL: this.formBuilder.control(this.dadosService.objDados.DT_FIM_VAL),
      IN_AUTORIA: this.formBuilder.control(this.dadosService.objDados.IN_AUTORIA),
      CD_SUSPEN: this.formBuilder.control(this.dadosService.objDados.CD_SUSPEN),
      IN_SUSPEN: this.formBuilder.control(this.dadosService.objDados.IN_SUSPEN),
      DT_DECISAO: this.formBuilder.control(this.dadosService.objDados.DT_DECISAO),
      IN_DEPOSIT: this.formBuilder.control(this.dadosService.objDados.CD_UF),
      CD_UF: this.formBuilder.control(this.dadosService.objDados.CD_UF),
      CD_MUNIC: this.formBuilder.control(this.dadosService.objDados.CD_MUNIC),
      CD_VARA: this.formBuilder.control(this.dadosService.objDados.CD_VARA),
      IND_PROCES: this.formBuilder.control(this.dadosService.objDados.IND_PROCES),
      REG_INCONS: this.formBuilder.control(this.dadosService.objDados.REG_INCONS),
      BATE_INCONS: this.formBuilder.control(this.dadosService.objDados.BATE_INCONS),
      CD_ITGR: this.formBuilder.control(this.dadosService.objDados.CD_ITGR),
      NR_SEQU_ITGR: this.formBuilder.control(this.dadosService.objDados.NR_SEQU_ITGR),
      CD_SITU_ITGR: this.formBuilder.control(this.dadosService.objDados.CD_SITU_ITGR),
      DT_CTRL_ITGR: this.formBuilder.control(this.dadosService.objDados.DT_CTRL_ITGR),
      FILLER: this.formBuilder.control(this.dadosService.objDados.FILLER)
    });

    $('#xxx').click();
  }
}