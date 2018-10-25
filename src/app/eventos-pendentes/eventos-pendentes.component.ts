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


  redirect(layout: any, contribuinte: any, periodo: any) {
    console.log("redirect - layout: " + layout);

    this.dadosService.objDados = {
      "contribuinte": contribuinte,
      "periodo": periodo
    };

    // this.router.navigate([`/home/eventos-pendentes/${layout}`])
    if (layout == 'R1000') {
      this.router.navigate(['/home/eventos-pendentes/Painel-controle-R1000'])
    }
    if (layout == 'R2010') {
      this.router.navigate(['/home/eventos-pendentes/Painel-controle'])
    }
  }



}
