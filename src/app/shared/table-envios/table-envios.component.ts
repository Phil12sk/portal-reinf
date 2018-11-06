import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-envios',
  templateUrl: './table-envios.component.html',
  styleUrls: ['./table-envios.component.css']
})
export class TableEnviosComponent implements OnInit {

  constructor() { }
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

  ngOnInit() {
  }

}