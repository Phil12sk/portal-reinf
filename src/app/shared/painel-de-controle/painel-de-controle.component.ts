import { Component, OnInit } from '@angular/core';
import { EvtPendente } from '../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMaskModule } from "ngx-currency-mask";
declare var $: any;


@Component({
  selector: 'app-painel-de-controle',
  templateUrl: './painel-de-controle.component.html',
  styleUrls: ['./painel-de-controle.component.css']
})
export class PainelDeControleComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dadosService: DadosService) { }

  prestadores: String[] = [
    '72.345.678/0001-00 - Empresa Teste 1', 
    '62.345.678/0001-00 - Empresa Teste 2',
    '87.345.678/0001-00 - Empresa Teste 3',
    '92.345.678/0001-00 - Empresa Teste 4'];

  // contribuintePainelControle='ssssss';
teste='testeeeee';
contribuintePainelControle: any;
contribuinteSelecionado: any;
contribuinte: any;
periodo: any;
flag: any;
mod:any;

    // contribuintes: any[] = ['12345678000100',];
  contribuintesPainelControle: ContribuintePainelControle[] = [
    {
      periodo: { label: 'MAIO', value: '2018-05', status: 'green' },
      infoContribuintes: [{
        contribuinte: '12.345.678/0001-00 - Empresa Teste 1',
        layout: [
          { label: 'R1000', value: 'green' },
          { label: 'R1070', value: 'green' },
          { label: 'R2010', value: 'green' },
          { label: 'R2060', value: 'green' },

        ]
      },
      {
        contribuinte: '87.345.678/0001-00 - Empresa Teste 2',
        layout: [
          { label: 'R1000', value: 'green' },
          { label: 'R1070', value: 'green' },
          { label: 'R2010', value: 'green' },
          { label: 'R2060', value: 'green' },

        ]
      }]
    },
    {
      periodo: { label: 'JUNHO', value: '2018-06' ,status: 'red'},
      infoContribuintes: [{
        contribuinte: '92.345.678/0001-00 - Empresa Teste 2',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'red' },
          { label: 'R2060', value: 'gray' },

        ]
      }]

    },
    {
      periodo: { label: 'JULHO', value: '2018-07' ,status: 'red'},
      infoContribuintes: [{
        contribuinte: '92.345.678/0001-00 - Empresa Teste 3',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'red' },
          { label: 'R2060', value: 'gray' },

        ]
      }]

    },
    {
      periodo: { label: 'AGOSTO', value: '2018-08' ,status: 'red'},
      infoContribuintes: [{
        contribuinte: '92.345.678/0001-00 - Empresa Teste 4',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'red' },
          { label: 'R2060', value: 'gray' },

        ]
      }]

    },
    {
      periodo: { label: 'SETEMBRO', value: '2018-09' ,status: 'red'},
      infoContribuintes: [{
        contribuinte: '92.345.678/0001-00 - Empresa Teste 5',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'red' },
          { label: 'R2060', value: 'gray' },

        ]
      }]

    },
    {
      periodo: { label: 'OUTUBRO', value: '2018-10' ,status: 'yellow'},
      infoContribuintes: [{
        contribuinte: '92.345.678/0001-00 - Empresa Teste 6',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'yellow' },
          { label: 'R2060', value: 'gray' },

        ]
      }]

    },
    {
      periodo: { label: 'NOVEMBRO', value: '2018-11' ,status: 'blue'},
      infoContribuintes: [{
        contribuinte: '92.345.678/0001-00 - Empresa Teste 7',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'blue' },
          { label: 'R2060', value: 'gray' },

        ]
      }]

    }
  ];

  flagColor: String;

  ngOnInit() {
    // this.flagColor = 'green';

    //  $('#xxx').click();

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  redirect(layout: any, flag: any, contribuinte: any, periodo: any) {
    console.log("redirect - layout: " + layout);
    console.log("redirect - flag: " + flag);
    this.dadosService.objDados = {
      "contribuinte": contribuinte,
      "periodo": periodo,
      "flag": flag
    };

    this.contribuinte= contribuinte;
    this.periodo= periodo;
    this.flag= flag;
    this.mod='';

    if (flag != 'gray') {
      if (layout == 'R1000') {
        this.mod=2;
      }
      if (layout == 'R1070') {
        this.mod=3;
      }
      if (layout == 'R2010') {
        this.mod=4;
      }
      if (layout == 'R2060') {
        this.mod=5;
      }
      console.log(this.mod)
    }
  }

  transmitir(contribuintePainelControle: any){
    this.mod=1;
   
    // console.log("contribuintePainelControle: " + JSON.stringify(contribuintePainelControle));
    
    // this.dadosService.objDados = {
    //   "contribuintePainelControle": contribuintePainelControle
    // };

    // this.router.navigate(['/home/painel-de-controle/Transmissao'])
    this.contribuintePainelControle=contribuintePainelControle;
  }




  
}