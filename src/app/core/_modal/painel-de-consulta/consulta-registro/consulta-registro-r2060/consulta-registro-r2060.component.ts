import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-registro-r2060',
  templateUrl: './consulta-registro-r2060.component.html',
  styleUrls: ['./consulta-registro-r2060.component.css']
})
export class ConsultaRegistroR2060Component implements OnInit {

  constructor() { }
  isHistoric: boolean = false

  checkHistoric(){
    this.isHistoric = ! this.isHistoric
  }
  
  
  ngOnInit() {
  }
}