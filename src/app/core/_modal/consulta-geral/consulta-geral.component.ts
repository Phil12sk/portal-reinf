import { Component, OnInit, Input } from '@angular/core';

import { EvtPendente } from '../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMaskModule } from "ngx-currency-mask";
import { ExcelService } from '../../_service/excel.service';
declare var $: any;

@Component({
  selector: 'app-consulta-geral',
  templateUrl: './consulta-geral.component.html',
  styleUrls: ['./consulta-geral.component.css']
})
export class ConsultaGeralComponent implements OnInit {

  
  constructor(private excelService: ExcelService) { }
  ableNFTable: boolean;
  prestadores: any[];
  prestador: any;
  nfs: any[];

  @Input() contribuinte: any;
  @Input() periodo: any;
  @Input()  flag: any;

  exportToExcel(){
    this.excelService.exportAsExcelFile(this.nfs, 'r2010_excel')
  }

  ngOnInit() {
    this.ableNFTable = false;
    if (this.flag == 'red') {
      this.prestadores = [
        { cnpj: '99999999999999', qtdNf: 10, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'retificar' }, 
        { cnpj: '89999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000 , status: 'retificar' },
        { cnpj: '79999999999999', qtdNf: 8, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' },
        { cnpj: '69999999999999', qtdNf: 5, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'retificar' },
        { cnpj: '59999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' },
        { cnpj: '49999999999999', qtdNf: 15, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' },
        { cnpj: '39999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' },
        { cnpj: '29999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' }
      ]
  
      this.nfs = [
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'retificar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'retificar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'retificar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
      ];
    }
    else if (this.flag == 'yellow') {
      this.prestadores = [
        { cnpj: '99999999999999', qtdNf: 10, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' }, 
        { cnpj: '89999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000 , status: 'enviar' },
        { cnpj: '79999999999999', qtdNf: 8, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' },
        { cnpj: '69999999999999', qtdNf: 5, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' },
        { cnpj: '59999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' },
        { cnpj: '49999999999999', qtdNf: 15, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' },
        { cnpj: '39999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' },
        { cnpj: '29999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviar' }
      ];
  
  
      this.nfs = [
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviar' },
      ];
    }
    else {
      this.prestadores = [
        { cnpj: '99999999999999', qtdNf: 10, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' }, 
         { cnpj: '29999999999999', qtdNf: 20, valorTotalNFs: 10000, somaValoTotalBaseRet: 100000, valorTotalPrincRet: 100000, valorTotalAdicRet: 100000, valorTotalPrincNRet: 100000, valorTotalAdicNRet: 10000, status: 'enviado' }
      ];
  
      this.nfs = [
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
        { serie: 'XXXXXX', numero: 'XXXXXXX', dataEmissao: '10/10/2018', valorBruto: 10000, tipoServico: 1, valorBaseRetNF: 10000, valorRetNF: 1000, valorRetServicosSubcontratados: 10000, valorPrincNRetNF: 1000, valorServicosPrestApos15anos: 1000, valorServicosPrestApos20anos: 100000, valorServicosPrestApos25anos: 10000, valorAdicionalServicosPrestApos152025Anos: 100000, valorAdicNRetNF: 100000, status: 'enviado' },
      ];
    }
    $('#xxx').click();

    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });

  }

  redirectNf(prestador: any) {

    this.ableNFTable = true;

    this.prestador = prestador;

  }
}