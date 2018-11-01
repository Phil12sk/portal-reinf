import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-inclusao-registro-r1070',
  templateUrl: './inclusao-registro-r1070.component.html',
  styleUrls: ['./inclusao-registro-r1070.component.css']
})
export class InclusaoRegistroR1070Component implements OnInit {

  constructor(
  private formBuilder: FormBuilder) { }
  // isLoaded: boolean = true
  r1070Form: FormGroup
  today: number = Date.now();

  ngOnInit() {

    this.r1070Form = this.formBuilder.group({
      TP_OPER: this.formBuilder.control(""),
      NM_LAYOUT: this.formBuilder.control(""),
      CD_SIS_ORIG: this.formBuilder.control(""),
      DT_MOVIMENT: this.formBuilder.control(""),
      TP_INSCRI: this.formBuilder.control(""),
      NR_INSCRI: this.formBuilder.control(""),
      TP_PROCES: this.formBuilder.control(""),
      NR_PROCES: this.formBuilder.control(""),
      DT_INI_VAL: this.formBuilder.control(""),
      DT_FIM_VAL: this.formBuilder.control(""),
      IN_AUTORIA: this.formBuilder.control(""),
      CD_SUSPEN: this.formBuilder.control(""),
      IN_SUSPEN: this.formBuilder.control(""),
      DT_DECISAO: this.formBuilder.control(""),
      IN_DEPOSIT: this.formBuilder.control(""),
      CD_UF: this.formBuilder.control(""),
      CD_MUNIC: this.formBuilder.control(""),
      CD_VARA: this.formBuilder.control(""),
      IND_PROCES: this.formBuilder.control(""),
      REG_INCONS: this.formBuilder.control(""),
      BATE_INCONS: this.formBuilder.control(""),
      CD_ITGR: this.formBuilder.control(""),
      NR_SEQU_ITGR: this.formBuilder.control(""),
      CD_SITU_ITGR: this.formBuilder.control(""),
      DT_CTRL_ITGR: this.formBuilder.control(""),
      FILLER: this.formBuilder.control("")
    });

    $('#xxx').click();

  }

}
