import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DadosService } from '../../../core/_service/dados.service';
declare var $: any;

@Component({
  selector: 'app-r2060',
  templateUrl: './r2060.component.html',
  styleUrls: ['./r2060.component.css']
})
export class R2060Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dadosService: DadosService) { }
  isLoaded: boolean = true
  r2060Form: FormGroup

  ngOnInit() {
    this.r2060Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(this.dadosService.objDados.TP_OPER),
      NM_LAYOUT: this.formBuilder.control(this.dadosService.objDados.NM_LAYOUT),
      CD_SIS_ORIG: this.formBuilder.control(this.dadosService.objDados.CD_SIS_ORIG),
      CD_PRODUTO: this.formBuilder.control(this.dadosService.objDados.CD_PRODUTO),
      CD_RETENCAO: this.formBuilder.control(this.dadosService.objDados.CD_RETENCAO),
      DT_MOVIMENT: this.formBuilder.control(this.dadosService.objDados.DT_MOVIMENT),
      TP_INSCRI: this.formBuilder.control(this.dadosService.objDados.TP_INSCRI),
      NR_INSCRI: this.formBuilder.control(this.dadosService.objDados.NR_INSCRI),
      TP_INSC_EST: this.formBuilder.control(this.dadosService.objDados.TP_INSC_EST),
      NR_INSC_EST: this.formBuilder.control(this.dadosService.objDados.NR_INSC_EST),
      VL_TOT_RECBRUTA: this.formBuilder.control(this.dadosService.objDados.VL_TOT_RECBRUTA),
      VL_TOT_APUESTAB: this.formBuilder.control(this.dadosService.objDados.VL_TOT_APUESTAB),
      VL_TOT_EXIGSUSP: this.formBuilder.control(this.dadosService.objDados.VL_TOT_EXIGSUSP),
      CD_ATI_ECON: this.formBuilder.control(this.dadosService.objDados.CD_ATI_ECON),
      VL_REC_ATIV: this.formBuilder.control(this.dadosService.objDados.VL_REC_ATIV),
      VL_EXC_REC: this.formBuilder.control(this.dadosService.objDados.VL_EXC_REC),
      VL_ADI_REC: this.formBuilder.control(this.dadosService.objDados.VL_ADI_REC),
      VL_BASE_CALC: this.formBuilder.control(this.dadosService.objDados.VL_BASE_CALC),
      VL_PREV_REC: this.formBuilder.control(this.dadosService.objDados.VL_PREV_REC),
      VL_PROC_SUSP: this.formBuilder.control(this.dadosService.objDados.VL_PROC_SUSP),
      TP_PROCESSO: this.formBuilder.control(this.dadosService.objDados.TP_PROCESSO),
      NR_PROCESSO: this.formBuilder.control(this.dadosService.objDados.NR_PROCESSO),
      CD_IND_SUSP: this.formBuilder.control(this.dadosService.objDados.CD_IND_SUSP),
      TP_AJUSTE: this.formBuilder.control(this.dadosService.objDados.TP_AJUSTE),
      CD_AJUSTE: this.formBuilder.control(this.dadosService.objDados.CD_AJUSTE),
      VL_AJUSTE: this.formBuilder.control(this.dadosService.objDados.VL_AJUSTE),
      DESC_AJUSTE: this.formBuilder.control(this.dadosService.objDados.DESC_AJUSTE),
      DT_AJUSTE: this.formBuilder.control(this.dadosService.objDados.DT_AJUSTE),
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