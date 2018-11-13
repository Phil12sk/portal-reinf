import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-registro-r2010',
  templateUrl: './consulta-registro-r2010.component.html',
  styleUrls: ['./consulta-registro-r2010.component.css']
})
export class ConsultaRegistroR2010Component implements OnInit {

  constructor() { }
  isHistoric: boolean = false

  checkHistoric(){
    this.isHistoric = ! this.isHistoric
  }
  
  ngOnInit() {
  }
}