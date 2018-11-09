import { Component, OnInit, Input } from '@angular/core';
import { ExcelService } from '../../../_service/excel.service';

@Component({
  selector: 'app-controle-envio-r1070',
  templateUrl: './controle-envio-r1070.component.html',
  styleUrls: ['./controle-envio-r1070.component.css']
})
export class ControleEnvioR1070Component implements OnInit {

  constructor(private excelService: ExcelService) { }
  @Input() contribuintes: any[]
  ableTab: boolean = true

  checkInfos(){
    this.ableTab = !this.ableTab
  }

  exportToExcel(){
    this.excelService.exportAsExcelFile(this.contribuintes, 'r1000_excel')
  }

  ngOnInit() {
  }

}
