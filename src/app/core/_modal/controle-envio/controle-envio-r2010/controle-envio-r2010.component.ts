import { Component, OnInit, Input } from '@angular/core';
import { ExcelService } from '../../../_service/excel.service';

@Component({
  selector: 'app-controle-envio-r2010',
  templateUrl: './controle-envio-r2010.component.html',
  styleUrls: ['./controle-envio-r2010.component.css']
})
export class ControleEnvioR2010Component implements OnInit {

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
