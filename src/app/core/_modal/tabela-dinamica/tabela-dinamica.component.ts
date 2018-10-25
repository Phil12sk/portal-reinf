import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-tabela-dinamica',
  templateUrl: './tabela-dinamica.component.html',
  styleUrls: ['./tabela-dinamica.component.css']
})
export class TabelaDinamicaComponent implements OnInit {

  titulo: any[];
  conteudo: any[];

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private dadosService: DadosService) { }

  ngOnInit() {

    this.titulo = this.dadosService.objDados.titulo;
    this.conteudo = this.dadosService.objDados.conteudo;

    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });

  }

}

