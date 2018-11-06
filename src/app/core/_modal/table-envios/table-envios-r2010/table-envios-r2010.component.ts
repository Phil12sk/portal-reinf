import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r2010',
  templateUrl: './table-envios-r2010.component.html',
  styleUrls: ['./table-envios-r2010.component.css']
})
export class TableEnviosR2010Component implements OnInit {

  constructor() { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = false
  }

  ngOnInit() {
  }

}
