import { Component, OnInit, Input } from '@angular/core';
import { ExcelService } from '../../../_service/excel.service';

@Component({
  selector: 'app-controle-envio-r1000',
  templateUrl: './controle-envio-r1000.component.html',
  styleUrls: ['./controle-envio-r1000.component.css']
})
export class ControleEnvioR1000Component implements OnInit {

  constructor(private excelService: ExcelService) { }
  @Input() contribuintes: any[]
  ableTab: boolean = true
  status: boolean
  

  checkInfos(){
    this.ableTab = !this.ableTab
  }

  exportToExcel(){
    const header = []
    
    for(let i = 0; i < this.contribuintes.length; i++){
      const header1 = 
      {
        'Data da Transação': '',
        'Recibo': '',
        'Status da Nota': '',
        'Nome do XML': ''
      }
      header1['Data da Transação'] = this.contribuintes[i].dataTrans
      header1['Recibo'] = this.contribuintes[i].recibo
      header1['Status da Nota'] = this.contribuintes[i].status
      header1['Nome do XML'] = this.contribuintes[i].xmlName
      header.push(header1)
    }
    this.excelService.exportAsExcelFile(header, 'r1000_excel')
  }

  ngOnInit() {
  }
}