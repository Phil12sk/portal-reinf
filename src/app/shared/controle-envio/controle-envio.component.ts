import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocumentModel } from '../../core/_model/document.model';
import { Router } from '@angular/router';
declare var $: any

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
  opt: boolean
  layouts: any = [
    {
      label: 'R1000',
      xml: {
        dataTrans: '01.11.2018',
        totalXML: 5,
        totalXMLSuccess: 3,
        totalXMLError: 2,
        xmlSuccess: [
          {
            dataTrans: '01.11.2018',
            xmlName: 'aaaa_01-10-2018', 
            recibo: '000000-00-0000-0000-000000', 
            status: 'success'
          },
          {
            dataTrans: '01.11.2018',
            xmlName: 'aaaa_03-10-2018', 
            recibo: '222222-22-2222-2222-222222', 
            status: 'success'
          },
          {
            dataTrans: '01.11.2018',
            xmlName: 'aaaa_05-10-2018', 
            recibo: '444444-44-4444-4444-444444', 
            status: 'success'
          }
        ],
        xmlError: [
          {
            dataTrans: '01.11.2018',
            xmlName: 'aaaa_02-10-2018', 
            recibo: '111111-11-1111-1111-111111', 
            status: 'error'
          },
          {
            dataTrans: '01.11.2018',
            xmlName: 'aaaa_04-10-2018', 
            recibo: '333333-33-3333-3333-333333', 
            status: 'error'
          }
        ]
      }
    },
    {
      label: 'R1070',
      xml: {
        totalXML: 0,
        totalXMLSuccess: 0,
        totalXMLError: 0,
        xmlSuccess: [],
        xmlError: []
      }
    },
    {
      label: 'R2010',
      xml: {
        dataTrans: '01.11.2018',
        totalXML: 90,
        totalXMLSuccess: 60,
        totalXMLError: 30,
        xmlSuccess: [
          {xmlName: 'aaaa_1-10-2018', recibo: '111111-11-1111-1111-111111', status: 'success'},
          {xmlName: 'aaaa_2-10-2018', recibo: '222222-22-2222-2222-222222', status: 'success'},
          {xmlName: 'aaaa_3-10-2018', recibo: '333333-33-3333-3333-333333', status: 'success'},
          {xmlName: 'aaaa_4-10-2018', recibo: '444444-44-4444-4444-444444', status: 'success'},
          {xmlName: 'aaaa_5-10-2018', recibo: '555555-55-5555-5555-555555', status: 'success'},
          {xmlName: 'aaaa_6-10-2018', recibo: '666666-66-6666-6666-666666', status: 'success'},
          {xmlName: 'aaaa_7-10-2018', recibo: '777777-77-7777-7777-777777', status: 'success'},
          {xmlName: 'aaaa_8-10-2018', recibo: '888888-88-8888-8888-888888', status: 'success'},
          {xmlName: 'aaaa_9-10-2018', recibo: '999999-99-9999-9999-999999', status: 'success'},
          {xmlName: 'aaaa_10-10-2018', recibo: '000000-00-0000-0000-000000', status: 'success'},
          {xmlName: 'aaaa_11-10-2018', recibo: '111111-11-1111-1111-111111', status: 'success'},
          {xmlName: 'aaaa_12-10-2018', recibo: '222222-22-2222-2222-222222', status: 'success'},
          {xmlName: 'aaaa_13-10-2018', recibo: '333333-33-3333-3333-333333', status: 'success'},
          {xmlName: 'aaaa_14-10-2018', recibo: '444444-44-4444-4444-444444', status: 'success'},
          {xmlName: 'aaaa_15-10-2018', recibo: '555555-55-5555-5555-555555', status: 'success'},
          {xmlName: 'aaaa_16-10-2018', recibo: '666666-66-6666-6666-666666', status: 'success'},
          {xmlName: 'aaaa_17-10-2018', recibo: '777777-77-7777-7777-777777', status: 'success'},
          {xmlName: 'aaaa_18-10-2018', recibo: '888888-88-8888-8888-888888', status: 'success'},
          {xmlName: 'aaaa_19-10-2018', recibo: '999999-99-9999-9999-999999', status: 'success'},
          {xmlName: 'aaaa_20-10-2018', recibo: '000000-00-0000-0000-000000', status: 'success'},
          {xmlName: 'aaaa_21-10-2018', recibo: '111111-11-1111-1111-111111', status: 'success'},
          {xmlName: 'aaaa_22-10-2018', recibo: '222222-22-2222-2222-222222', status: 'success'},
          {xmlName: 'aaaa_23-10-2018', recibo: '333333-33-3333-3333-333333', status: 'success'},
          {xmlName: 'aaaa_24-10-2018', recibo: '444444-44-4444-4444-444444', status: 'success'},
          {xmlName: 'aaaa_25-10-2018', recibo: '555555-55-5555-5555-555555', status: 'success'},
          {xmlName: 'aaaa_26-10-2018', recibo: '666666-66-6666-6666-666666', status: 'success'},
          {xmlName: 'aaaa_27-10-2018', recibo: '777777-77-7777-7777-777777', status: 'success'},
          {xmlName: 'aaaa_28-10-2018', recibo: '888888-88-8888-8888-888888', status: 'success'},
          {xmlName: 'aaaa_29-10-2018', recibo: '999999-99-9999-9999-999999', status: 'success'},
          {xmlName: 'aaaa_30-10-2018', recibo: '000000-00-0000-0000-000000', status: 'success'},
          {xmlName: 'aaaa_1-11-2018', recibo: '111111-11-1111-1111-111111', status: 'success'},
          {xmlName: 'aaaa_2-11-2018', recibo: '222222-22-2222-2222-222222', status: 'success'},
          {xmlName: 'aaaa_3-11-2018', recibo: '333333-33-3333-3333-333333', status: 'success'},
          {xmlName: 'aaaa_4-11-2018', recibo: '444444-44-4444-4444-444444', status: 'success'},
          {xmlName: 'aaaa_5-11-2018', recibo: '555555-55-5555-5555-555555', status: 'success'},
          {xmlName: 'aaaa_6-11-2018', recibo: '666666-66-6666-6666-666666', status: 'success'},
          {xmlName: 'aaaa_7-11-2018', recibo: '777777-77-7777-7777-777777', status: 'success'},
          {xmlName: 'aaaa_8-11-2018', recibo: '888888-88-8888-8888-888888', status: 'success'},
          {xmlName: 'aaaa_9-11-2018', recibo: '999999-99-9999-9999-999999', status: 'success'},
          {xmlName: 'aaaa_10-11-2018', recibo: '000000-00-0000-0000-000000', status: 'success'},
          {xmlName: 'aaaa_11-11-2018', recibo: '111111-11-1111-1111-111111', status: 'success'},
          {xmlName: 'aaaa_12-11-2018', recibo: '222222-22-2222-2222-222222', status: 'success'},
          {xmlName: 'aaaa_13-11-2018', recibo: '333333-33-3333-3333-333333', status: 'success'},
          {xmlName: 'aaaa_14-11-2018', recibo: '444444-44-4444-4444-444444', status: 'success'},
          {xmlName: 'aaaa_15-11-2018', recibo: '555555-55-5555-5555-555555', status: 'success'},
          {xmlName: 'aaaa_16-11-2018', recibo: '666666-66-6666-6666-666666', status: 'success'},
          {xmlName: 'aaaa_17-11-2018', recibo: '777777-77-7777-7777-777777', status: 'success'},
          {xmlName: 'aaaa_18-11-2018', recibo: '888888-88-8888-8888-888888', status: 'success'},
          {xmlName: 'aaaa_19-11-2018', recibo: '999999-99-9999-9999-999999', status: 'success'},
          {xmlName: 'aaaa_20-11-2018', recibo: '000000-00-0000-0000-000000', status: 'success'},
          {xmlName: 'aaaa_21-11-2018', recibo: '111111-11-1111-1111-111111', status: 'success'},
          {xmlName: 'aaaa_22-11-2018', recibo: '222222-22-2222-2222-222222', status: 'success'},
          {xmlName: 'aaaa_23-11-2018', recibo: '333333-33-3333-3333-333333', status: 'success'},
          {xmlName: 'aaaa_24-11-2018', recibo: '444444-44-4444-4444-444444', status: 'success'},
          {xmlName: 'aaaa_25-11-2018', recibo: '555555-55-5555-5555-555555', status: 'success'},
          {xmlName: 'aaaa_26-11-2018', recibo: '666666-66-6666-6666-666666', status: 'success'},
          {xmlName: 'aaaa_27-11-2018', recibo: '777777-77-7777-7777-777777', status: 'success'},
          {xmlName: 'aaaa_28-11-2018', recibo: '888888-88-8888-8888-888888', status: 'success'},
          {xmlName: 'aaaa_29-11-2018', recibo: '999999-99-9999-9999-999999', status: 'success'},
          {xmlName: 'aaaa_30-11-2018', recibo: '000000-00-0000-0000-000000', status: 'success'}
        ],
        xmlError: [
          {xmlName: 'aaaa_1-09-2018', recibo: '111111-11-1111-1111-111111', status: 'error'},
          {xmlName: 'aaaa_2-09-2018', recibo: '222222-22-2222-2222-222222', status: 'error'},
          {xmlName: 'aaaa_3-09-2018', recibo: '333333-33-3333-3333-333333', status: 'error'},
          {xmlName: 'aaaa_4-09-2018', recibo: '444444-44-4444-4444-444444', status: 'error'},
          {xmlName: 'aaaa_5-09-2018', recibo: '555555-55-5555-5555-555555', status: 'error'},
          {xmlName: 'aaaa_6-09-2018', recibo: '666666-66-6666-6666-666666', status: 'error'},
          {xmlName: 'aaaa_7-09-2018', recibo: '777777-77-7777-7777-777777', status: 'error'},
          {xmlName: 'aaaa_8-09-2018', recibo: '888888-88-8888-8888-888888', status: 'error'},
          {xmlName: 'aaaa_9-09-2018', recibo: '999999-99-9999-9999-999999', status: 'error'},
          {xmlName: 'aaaa_10-09-2018', recibo: '000000-00-0000-0000-000000', status: 'error'},
          {xmlName: 'aaaa_11-09-2018', recibo: '111111-11-1111-1111-111111', status: 'error'},
          {xmlName: 'aaaa_12-09-2018', recibo: '222222-22-2222-2222-222222', status: 'error'},
          {xmlName: 'aaaa_13-09-2018', recibo: '333333-33-3333-3333-333333', status: 'error'},
          {xmlName: 'aaaa_14-09-2018', recibo: '444444-44-4444-4444-444444', status: 'error'},
          {xmlName: 'aaaa_15-09-2018', recibo: '555555-55-5555-5555-555555', status: 'error'},
          {xmlName: 'aaaa_16-09-2018', recibo: '666666-66-6666-6666-666666', status: 'error'},
          {xmlName: 'aaaa_17-09-2018', recibo: '777777-77-7777-7777-777777', status: 'error'},
          {xmlName: 'aaaa_18-09-2018', recibo: '888888-88-8888-8888-888888', status: 'error'},
          {xmlName: 'aaaa_19-09-2018', recibo: '999999-99-9999-9999-999999', status: 'error'},
          {xmlName: 'aaaa_20-09-2018', recibo: '000000-00-0000-0000-000000', status: 'error'},
          {xmlName: 'aaaa_21-09-2018', recibo: '111111-11-1111-1111-111111', status: 'error'},
          {xmlName: 'aaaa_22-09-2018', recibo: '222222-22-2222-2222-222222', status: 'error'},
          {xmlName: 'aaaa_23-09-2018', recibo: '333333-33-3333-3333-333333', status: 'error'},
          {xmlName: 'aaaa_24-09-2018', recibo: '444444-44-4444-4444-444444', status: 'error'},
          {xmlName: 'aaaa_25-09-2018', recibo: '555555-55-5555-5555-555555', status: 'error'},
          {xmlName: 'aaaa_26-09-2018', recibo: '666666-66-6666-6666-666666', status: 'error'},
          {xmlName: 'aaaa_27-09-2018', recibo: '777777-77-7777-7777-777777', status: 'error'},
          {xmlName: 'aaaa_28-09-2018', recibo: '888888-88-8888-8888-888888', status: 'error'},
          {xmlName: 'aaaa_29-09-2018', recibo: '999999-99-9999-9999-999999', status: 'error'},
          {xmlName: 'aaaa_30-09-2018', recibo: '000000-00-0000-0000-000000', status: 'error'}
        ]
      }
    },
    {
      label: 'R2060',
      xml: {
        dataTrans: '01.11.2018',
        totalXML: 0,
        totalXMLSuccess: 0,
        totalXMLError: 0
      }
    },
    {
      label: 'R2099',
      xml: {
        dataTrans: '01.11.2018',
        totalXML: 1,
        totalXMLSuccess: 1,
        totalXMLError: 0,
        xmlSuccess: [
          {xmlName: 'aaaa_1-10-2018', recibo: '111111-11-1111-1111-111111', status: 'success'}
        ],
        xmlError: []
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
  contribuintes: any[]

  buildAction(value, layout){
    for(let i = 0; i < this.layouts.length; i++){
      if(layout === this.layouts[i].label){
        if(value === 'success'){
          this.opt = true
          this.contribuintes = this.layouts[i].xml.xmlSuccess
        }else{
          this.opt = false
          this.contribuintes = this.layouts[i].xml.xmlError
        }
      }
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