import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r2099',
  templateUrl: './table-envios-r2099.component.html',
  styleUrls: ['./table-envios-r2099.component.css']
})
export class TableEnviosR2099Component implements OnInit {

  constructor() { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = false
  }

  ngOnInit() {
  }

}
