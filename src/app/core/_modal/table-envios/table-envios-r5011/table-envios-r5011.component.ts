import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r5011',
  templateUrl: './table-envios-r5011.component.html',
  styleUrls: ['./table-envios-r5011.component.css']
})
export class TableEnviosR5011Component implements OnInit {

  constructor() { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = false
  }

  ngOnInit() {
  }

}
