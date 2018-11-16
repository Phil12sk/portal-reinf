import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-registro-r2010',
  templateUrl: './consulta-registro-r2010.component.html',
  styleUrls: ['./consulta-registro-r2010.component.css']
})
export class ConsultaRegistroR2010Component implements OnInit {

  constructor() { }
  isConsult: boolean = true
  isHistoric: boolean = false
  ableEdit2010: boolean = false
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
      this.ableEdit2010 = true
    }else{
      this.isConsult = true
      this.ableEdit2010 = false
    }
  }
  
  ngOnInit() {
  }
}