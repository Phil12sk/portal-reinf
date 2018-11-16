import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-registro-r1070',
  templateUrl: './consulta-registro-r1070.component.html',
  styleUrls: ['./consulta-registro-r1070.component.css']
})
export class ConsultaRegistroR1070Component implements OnInit {

  constructor() { }
  isConsult: boolean = true
  isHistoric: boolean = false
  ableEdit1070: boolean = false
  isAllowedToEdit: boolean = false
  isNotAllowedToEdit: boolean = false

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
      this.ableEdit1070 = true
    }else{
      this.isConsult = true
      this.ableEdit1070 = false
    }
  }
  
  ngOnInit() {
  }
}