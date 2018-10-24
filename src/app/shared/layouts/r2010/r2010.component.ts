import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DadosService } from '../../../core/_service/dados.service';
declare var $:  any

@Component({
  selector: 'app-r2010',
  templateUrl: './r2010.component.html',
  styleUrls: ['./r2010.component.css']
})
export class R2010Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dadosService: DadosService) { }
  isLoaded: boolean = true
  r2010Form: FormGroup

  ngOnInit() {
    this.r2010Form = this.formBuilder.group({
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
      IN_OBRA: this.formBuilder.control(this.dadosService.objDados.IN_OBRA),
      NR_CNPJ_PRE: this.formBuilder.control(this.dadosService.objDados.NR_CNPJ_PRE),
      VL_TOT_BRUTO: this.formBuilder.control(this.dadosService.objDados.VL_TOT_BRUTO),
      VL_TOT_BASERET: this.formBuilder.control(this.dadosService.objDados.VL_TOT_BASERET),
      VL_TOT_RETPRINC: this.formBuilder.control(this.dadosService.objDados.VL_TOT_RETPRINC),
      VL_TOT_RETADIC: this.formBuilder.control(this.dadosService.objDados.VL_TOT_RETADIC),
      VL_TOT_NRETPRI: this.formBuilder.control(this.dadosService.objDados.VL_TOT_NRETPRI),
      VL_TOT_NRETADIC: this.formBuilder.control(this.dadosService.objDados.VL_TOT_NRETADIC),
      IN_CPRB: this.formBuilder.control(this.dadosService.objDados.IN_CPRB),
      NR_SERIE: this.formBuilder.control(this.dadosService.objDados.NR_SERIE),
      NR_DOCTO: this.formBuilder.control(this.dadosService.objDados.NR_DOCTO),
      DT_EMISSAONF: this.formBuilder.control(this.dadosService.objDados.DT_EMISSAONF),
      VL_BRUTO: this.formBuilder.control(this.dadosService.objDados.VL_BRUTO),
      NM_OBS: this.formBuilder.control(this.dadosService.objDados.NM_OBS),
      TP_SERVICO: this.formBuilder.control(this.dadosService.objDados.TP_SERVICO),
      VL_BASERET: this.formBuilder.control(this.dadosService.objDados.VL_BASERET),
      VL_RETENCAO: this.formBuilder.control(this.dadosService.objDados.VL_RETENCAO),
      VL_RETSUB: this.formBuilder.control(this.dadosService.objDados.VL_RETSUB),
      VL_NRETPRINC: this.formBuilder.control(this.dadosService.objDados.VL_NRETPRINC),
      VL_SERVICOS15: this.formBuilder.control(this.dadosService.objDados.VL_SERVICOS15),
      VL_SERVICOS20: this.formBuilder.control(this.dadosService.objDados.VL_SERVICOS20),
      VL_SERVICOS25: this.formBuilder.control(this.dadosService.objDados.VL_SERVICOS25),
      VL_ADICIONAL: this.formBuilder.control(this.dadosService.objDados.VL_ADICIONAL),
      VL_NRETADIC: this.formBuilder.control(this.dadosService.objDados.VL_NRETADIC),
      TP_PROC_RET: this.formBuilder.control(this.dadosService.objDados.TP_PROC_RET),
      NR_PROC_RET: this.formBuilder.control(this.dadosService.objDados.NR_PROC_RET),
      CD_SUSP_PRIN: this.formBuilder.control(this.dadosService.objDados.CD_SUSP_PRIN),
      VL_PRINC: this.formBuilder.control(this.dadosService.objDados.VL_PRINC),
      TP_PROC_ADIC: this.formBuilder.control(this.dadosService.objDados.TP_PROC_ADIC),
      NR_PROC_ADIC: this.formBuilder.control(this.dadosService.objDados.NR_PROC_ADIC),
      CD_SUSP_ADIC: this.formBuilder.control(this.dadosService.objDados.CD_SUSP_ADIC),
      VL_ADIC: this.formBuilder.control(this.dadosService.objDados.VL_ADIC),
      IND_PROCES: this.formBuilder.control(this.dadosService.objDados.IND_PROCES),
      REG_INCONS: this.formBuilder.control(this.dadosService.objDados.REG_INCONS),
      CD_ITGR: this.formBuilder.control(this.dadosService.objDados.CD_ITGR),
      NR_SEQU_ITGR: this.formBuilder.control(this.dadosService.objDados.NR_SEQU_ITGR),
      CD_SITU_ITGR: this.formBuilder.control(this.dadosService.objDados.CD_SITU_ITGR),
      DT_CTRL_ITGR: this.formBuilder.control(this.dadosService.objDados.DT_CTRL_ITGR),
      FILLER: this.formBuilder.control(this.dadosService.objDados.FILLER)
    });
    $('#xxx').click();
  }
}