import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../../core/_service/dados.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



declare var $: any;
@Component({
  selector: 'app-transmissao',
  templateUrl: './transmissao.component.html',
  styleUrls: ['./transmissao.component.css']
})
export class TransmissaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }

  contribuintePainelControle: any;

  ngOnInit() {

    this.contribuintePainelControle = this.dadosService.objDados.contribuintePainelControle;
    console.log("contribuintePainelControle:" + JSON.stringify(this.contribuintePainelControle));
    
    $('#xxx').click();
    

  }

  




}
