import { Component, OnInit } from '@angular/core';
import { EvtPendente } from '../core/_model/evtPendente.mode';
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

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
    prestadores: String[] = ['72345678000100','62345678000100'];
    evtPendentes: EvtPendente[] = [
    {
      month: 'janeiro', 
      contribuinte: [
        {
        label: '12345678000100', value: '12345678000100'
      },
      {
        label: '92345678000100', value: '92345678000100'
      }
    ],
      layout: {
        label: 'R2010', value: 'R2010'
      }
    },
    {
      month: 'março', 
      contribuinte: [
        {
        label: '1838066500013', value: '1838066500013'
      }
    ],
      layout: {
        label: 'R2010', value: 'R2010'
      }
    },
    {
      month: 'setembro', 
      contribuinte: [{
        label: '45113756000185', value: '45113756000185'
      }],
      layout: {
        label: 'R2099', value: 'R2099'
      }
    } 
  ]

  

  ngOnInit() {
  }


  redirect(evtPendente: EvtPendente ){
    this.router.navigate([`/home/eventos-pendentes/${evtPendente.layout.value}`])
  }

}
