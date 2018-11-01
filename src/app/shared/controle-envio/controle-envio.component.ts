import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocumentModel } from '../../core/_model/document.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controle-envio',
  templateUrl: './controle-envio.component.html',
  styleUrls: ['./controle-envio.component.css'],
  animations: [
    trigger('tableAppear', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('1000ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ControleEnvioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  tableState = 'ready'
  consultForm: FormGroup
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  documents: DocumentModel[] = [
    {label: '12345678000100', value: '12345678000100'},
    {label: '22345679000101', value: '22345679000101'}
  ]
  ableTab: boolean = true
  action: any
  layouts: any = [
    {
      label: 'R1000',
      xml: {
        totalXML: 0,
        totalXMLSuccess: 1,
        totalXMLError: 0
      }
    },
    {
      label: 'R1070',
      xml: {
        totalXML: 0,
        totalXMLSuccess: 0,
        totalXMLError: 0
      }
    },
    {
      label: 'R2010',
      xml: {
        totalXML: 210,
        totalXMLSuccess: 209,
        totalXMLError: 1
      }
    },
    {
      label: 'R2060',
      xml: {
        totalXML: 0,
        totalXMLSuccess: 0,
        totalXMLError: 0
      }
    },
    {
      label: 'R2099',
      xml: {
        totalXML: 1,
        totalXMLSuccess: 1,
        totalXMLError: 0
      }
    },
    {
      label: 'R9000', 
      xml: {
        totalXML: 0,
        totalXMLSuccess: 0,
        totalXMLError: 0
      }
    }
  ]
  contribuintes: any = []

  buildAction(value){
    if(value === 'success'){
      this.contribuintes = [
        {xmlName: 'aaaa_01-10-2018', recibo: '000000-00-0000-0000-000000'},
        {xmlName: 'aaaa_02-10-2018', recibo: '111111-11-1111-1111-111111'},
        {xmlName: 'aaaa_03-10-2018', recibo: '222222-22-2222-2222-222222'}
      ]
    }else{
      this.contribuintes = [
        {xmlName: 'aaaa_01-10-2018', recibo: '000000-00-0000-0000-000000'}
      ]
    }
  }

  ableTable($event){
    this.ableTab = false
  }

  ngOnInit() {
    this.router.navigate(['/home/controle-envio'])
    this.consultForm = this.formBuilder.group({
      document: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })
  }
}