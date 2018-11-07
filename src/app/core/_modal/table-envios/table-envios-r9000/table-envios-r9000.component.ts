import { Component, OnInit, Input } from '@angular/core';
import { ExcelService } from '../../../_service/excel.service';

@Component({
  selector: 'app-table-envios-r9000',
  templateUrl: './table-envios-r9000.component.html',
  styleUrls: ['./table-envios-r9000.component.css']
})
export class TableEnviosR9000Component implements OnInit {

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
