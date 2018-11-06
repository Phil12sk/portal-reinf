import { Component, OnInit } from '@angular/core';
import { EvtPendente } from '../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../core/_model/contribuintePainelControle.model';
import { DadosService } from '../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMaskModule } from "ngx-currency-mask";
declare var $: any;


@Component({
  selector: 'app-eventos-pendentes',
  templateUrl: './eventos-pendentes.component.html',
  styleUrls: ['./eventos-pendentes.component.css']
})
export class EventosPendentesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dadosService: DadosService) { }

  prestadores: String[] = ['72345678000100', '62345678000100','87345678000100','92345678000100'];

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
        contribuinte: '12345678000100',
        layout: [
          { label: 'R1000', value: 'green' },
          { label: 'R1070', value: 'green' },
          { label: 'R2010', value: 'green' },
          { label: 'R2060', value: 'green' },

        ]
      },
      {
        contribuinte: '87345678000100',
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
        contribuinte: '92345678000100',
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
        contribuinte: '92345678000100',
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
        contribuinte: '92345678000100',
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
        contribuinte: '92345678000100',
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
        contribuinte: '92345678000100',
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
        contribuinte: '92345678000100',
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
     
    // this.contribuinte= contribuinte;
    // this.periodo= periodo;
    // this.flag= flag;
   
   

      // console.log("contribuinteSelecionado - : " + JSON.stringify(this.contribuinteSelecionado));
      

    //   this.router.navigate([`/home/eventos-pendentes/${layout}`])
      if (layout == 'R1000') {
        this.mod=2;
        // this.router.navigate(['/home/painel-de-controle/Painel-controle-R1000'])
      }
      if (layout == 'R1070') {
        this.mod=3;
        // this.router.navigate(['/home/painel-de-controle/Painel-controle-R1070'])
      }
      if (layout == 'R2010') {
        this.mod=4;
        // this.router.navigate(['/home/painel-de-controle/Painel-controle'])
      }
      if (layout == 'R2060') {
        this.mod=5;
        // this.router.navigate(['/home/painel-de-controle/Painel-controle-R2060'])
      }
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