import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r2060',
  templateUrl: './table-envios-r2060.component.html',
  styleUrls: ['./table-envios-r2060.component.css']
})
export class TableEnviosR2060Component implements OnInit {

  constructor() { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = false
  }

  ngOnInit() {
  }

}
