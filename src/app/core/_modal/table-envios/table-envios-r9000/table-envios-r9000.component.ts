import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r9000',
  templateUrl: './table-envios-r9000.component.html',
  styleUrls: ['./table-envios-r9000.component.css']
})
export class TableEnviosR9000Component implements OnInit {

  constructor() { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = false
  }

  ngOnInit() {
  }

}
