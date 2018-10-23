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

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }

  // evtPendentes: EvtPendente[] = [
  //   {
  //     month: 'janeiro', 
  //     contribuinte: {
  //       label: '12345678000100', value: '12345678000100'
  //     },
  //     layout: {
  //       label: 'R2010', value: 'R2010'
  //     }
  //   },
  //   {
  //     month: 'março', 
  //     contribuinte: {
  //       label: '1838066500013', value: '1838066500013'
  //     },
  //     layout: {
  //       label: 'R2010', value: 'R2010'
  //     }
  //   },
  //   {
  //     month: 'setembro', 
  //     contribuinte: {
  //       label: '45113756000185', value: '45113756000185'
  //     },
  //     layout: {
  //       label: 'R2099', value: 'R2099'
  //     }
  //   } 
  // ]
  prestadores: String[] = ['72345678000100', '62345678000100'];

  contribuintesPainelControle: ContribuintePainelControle[] = [
    {
      periodo: { label: 'JANEIRO', value: '2018-01' },
      infoContribuintes: [{
        contribuinte: '12345678000100',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'green' },
          { label: 'R2010', value: 'red' },
          { label: 'R2060', value: 'green' },
        
        ]
      },
      {
        contribuinte: '87345678000100',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'green' },
          { label: 'R2010', value: 'red' },
          { label: 'R2060', value: 'green' },
        
        ]
      }]

    },
    {
      periodo: { label: 'FEVEREIRO', value: '2018-02' },
      infoContribuintes: [{
        contribuinte: '92345678000100',
        layout: [
          { label: 'R1000', value: 'gray' },
          { label: 'R1070', value: 'gray' },
          { label: 'R2010', value: 'yellow' },
          { label: 'R2060', value: 'gray' },
        
        ]
      }]

    }

  ];

 

  flagColor: String;

  ngOnInit() {
    this.flagColor = 'green';
  }


<<<<<<< HEAD
  redirect(layout: String) {
    console.log("redirect - layout: " + layout);

    this.dadosService.objDados = {"contribuinte": 'XXX.XXXX.XXXX-XX'};

    this.router.navigate([`/home/eventos-pendentes/${layout}`])
=======
  redirect(evtPendente: EvtPendente ){
    this.router.navigate([`/home/eventos-pendentes/${evtPendente.layout.value}`])
>>>>>>> b57ba5e87a386be7c04cc1b1dcacd52d563948f1
  }

  

}
