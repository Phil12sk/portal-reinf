import { Component, OnInit } from '@angular/core';
import { DadosService } from '../core/_service/dados.service';
declare var $: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today: number = Date.now();
  constructor(private dadosService: DadosService) { }

  ngOnInit() {
  }
}