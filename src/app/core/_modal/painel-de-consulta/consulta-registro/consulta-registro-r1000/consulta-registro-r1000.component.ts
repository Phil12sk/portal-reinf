import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-registro-r1000',
  templateUrl: './consulta-registro-r1000.component.html',
  styleUrls: ['./consulta-registro-r1000.component.css']
})
export class ConsultaRegistroR1000Component implements OnInit {

  constructor() { }
  isHistoric: boolean = false
  
  checkHistoric(){
    this.isHistoric = ! this.isHistoric
  }

  ngOnInit() {
  }
}