import { Component, OnInit } from '@angular/core';
import { R2060Model } from '../../../../_model/r2060.model';

@Component({
  selector: 'app-consulta-registro-r2060',
  templateUrl: './consulta-registro-r2060.component.html',
  styleUrls: ['./consulta-registro-r2060.component.css']
})
export class ConsultaRegistroR2060Component implements OnInit {

  constructor() { }
  isConsult: boolean = true
  isHistoric: boolean = false
  isAllowedToEdit: boolean = false
  isNotAllowedToEdit: boolean = false
  ableEdit2060: boolean = false
  r2060: R2060Model[]

  checkHistoric(value){
    if(value === 1){
      this.isHistoric = true
      this.isConsult = false
    }else{
      this.isHistoric = false
      this.isConsult = true
    }
  }

  editInfos(value){
    if(value === 1){
      this.isConsult = false
      this.ableEdit2060 = true
    }else{
      this.isConsult = true
      this.ableEdit2060 = false
    }
  }
  
  editFile($event){
    if($event.target.checked == true){
      if($event.target.id === 'YYYYYYYYYY'){
        this.isAllowedToEdit = false
        this.isNotAllowedToEdit = true
      }else{
        this.isAllowedToEdit = true
        this.isNotAllowedToEdit = false
      }
    }
  }
  
  ngOnInit() {
    this.r2060 = [
      {
        TP_OPER:'XXXXXXXXXX',
        NM_LAYOUT:'XXXXXXXXXX',
        CD_SIS_ORIG:'XXXXXXXXXX',
        CD_PRODUTO:'XXXXXXXXXX',
        CD_RETENCAO:'XXXXXXXXXX',
        DT_MOVIMENT:'XXXXXXXXXX',
        TP_INSCRI:'XXXXXXXXXX',
        NR_INSCRI:'XXXXXXXXXX',
        TP_INSC_EST:'XXXXXXXXXX',
        NR_INSC_EST:'XXXXXXXXXX',
        VL_TOT_RECBRUTA:'XXXXXXXXXX',
        VL_TOT_APUESTAB:'XXXXXXXXXX',
        VL_TOT_EXIGSUSP:'XXXXXXXXXX',
        CD_ATI_ECON:'XXXXXXXXXX',
        VL_REC_ATIV:'XXXXXXXXXX',
        VL_EXC_REC:'XXXXXXXXXX',
        VL_ADI_REC:'XXXXXXXXXX',
        VL_BASE_CALC:'XXXXXXXXXX',
        VL_PREV_REC:'XXXXXXXXXX',
        VL_PROC_SUSP:'XXXXXXXXXX',
        TP_PROCESSO:'XXXXXXXXXX',
        NR_PROCESSO:'XXXXXXXXXX',
        CD_IND_SUSP:'XXXXXXXXXX',
        TP_AJUSTE:'XXXXXXXXXX',
        CD_AJUSTE:'XXXXXXXXXX',
        VL_AJUSTE:'XXXXXXXXXX',
        DESC_AJUSTE:'XXXXXXXXXX',
        DT_AJUSTE:'XXXXXXXXXX'
      },
      {
        TP_OPER:'YYYYYYYYYY',
        NM_LAYOUT:'YYYYYYYYYY',
        CD_SIS_ORIG:'YYYYYYYYYY',
        CD_PRODUTO:'YYYYYYYYYY',
        CD_RETENCAO:'YYYYYYYYYY',
        DT_MOVIMENT:'YYYYYYYYYY',
        TP_INSCRI:'YYYYYYYYYY',
        NR_INSCRI:'YYYYYYYYYY',
        TP_INSC_EST:'YYYYYYYYYY',
        NR_INSC_EST:'YYYYYYYYYY',
        VL_TOT_RECBRUTA:'YYYYYYYYYY',
        VL_TOT_APUESTAB:'YYYYYYYYYY',
        VL_TOT_EXIGSUSP:'YYYYYYYYYY',
        CD_ATI_ECON:'YYYYYYYYYY',
        VL_REC_ATIV:'YYYYYYYYYY',
        VL_EXC_REC:'YYYYYYYYYY',
        VL_ADI_REC:'YYYYYYYYYY',
        VL_BASE_CALC:'YYYYYYYYYY',
        VL_PREV_REC:'YYYYYYYYYY',
        VL_PROC_SUSP:'YYYYYYYYYY',
        TP_PROCESSO:'YYYYYYYYYY',
        NR_PROCESSO:'YYYYYYYYYY',
        CD_IND_SUSP:'YYYYYYYYYY',
        TP_AJUSTE:'YYYYYYYYYY',
        CD_AJUSTE:'YYYYYYYYYY',
        VL_AJUSTE:'YYYYYYYYYY',
        DESC_AJUSTE:'YYYYYYYYYY',
        DT_AJUSTE:'YYYYYYYYYY'
      }
    ]
  }
}