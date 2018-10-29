import { Component, OnInit , Input} from '@angular/core';
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

  // contribuintePainelControle: any;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private dadosService: DadosService) { }

    @Input() contribuintePainelControle: any;

  ngOnInit() {
    console.log("TESTE: " + JSON.stringify(this.contribuintePainelControle);

    // this.contribuintePainelControle = this.dadosService.objDados.contribuintePainelControle;
    // console.log("contribuintePainelControle-Modal:" + JSON.stringify(this.contribuintePainelControle));
    

  }

}

