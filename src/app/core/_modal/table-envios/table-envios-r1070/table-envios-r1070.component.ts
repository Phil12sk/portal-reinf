import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r1070',
  templateUrl: './table-envios-r1070.component.html',
  styleUrls: ['./table-envios-r1070.component.css']
})
export class TableEnviosR1070Component implements OnInit {

  constructor() { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = false
  }

  ngOnInit() {
  }

}
