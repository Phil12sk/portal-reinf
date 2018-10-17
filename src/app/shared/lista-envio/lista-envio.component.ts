import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-envio',
  templateUrl: './lista-envio.component.html',
  styleUrls: ['./lista-envio.component.css']
})
export class ListaEnvioComponent implements OnInit {

  @Input() options: any[]
  @Output() remove = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
    
  }

  emitRemove(item: any){
    this.remove.emit(item)
  }

}