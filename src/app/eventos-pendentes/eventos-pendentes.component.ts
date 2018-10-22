import { Component, OnInit } from '@angular/core';
import { EvtPendente } from '../core/_model/evtPendente.mode';

@Component({
  selector: 'app-eventos-pendentes',
  templateUrl: './eventos-pendentes.component.html',
  styleUrls: ['./eventos-pendentes.component.css']
})
export class EventosPendentesComponent implements OnInit {

  constructor() { }

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

}
