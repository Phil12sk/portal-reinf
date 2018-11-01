import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-envios-r1000',
  templateUrl: './table-envios-r1000.component.html',
  styleUrls: ['./table-envios-r1000.component.css']
})
export class TableEnviosR1000Component implements OnInit {

  constructor() { }
  @Input() action: any
  ableTab: boolean = true
  @Input() contribuintes: any[]

  getInfos(){
    console.log(this.action)
  }

  ngAfterContentInit(){
    this.getInfos()
  }

  ngOnInit() {
    
  }
}