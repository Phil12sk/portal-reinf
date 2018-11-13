import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-registro-r1070',
  templateUrl: './consulta-registro-r1070.component.html',
  styleUrls: ['./consulta-registro-r1070.component.css']
})
export class ConsultaRegistroR1070Component implements OnInit {

  constructor() { }
  isHistoric: boolean = false

  checkHistoric(){
    this.isHistoric = ! this.isHistoric
  }
  
  ngOnInit() {
  }
}