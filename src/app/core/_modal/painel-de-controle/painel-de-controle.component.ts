import { Component, OnInit } from '@angular/core';

import { EvtPendente } from '../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyMaskModule } from "ngx-currency-mask";
declare var $: any;

@Component({
  selector: 'app-painel-de-controle',
  templateUrl: './painel-de-controle.component.html',
  styleUrls: ['./painel-de-controle.component.css']
})
export class PainelDeControleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }

  ableNFTable: boolean;

  contribuinte: any;
  periodo: any;

  prestadores: any[];

  prestador: any;

  nfs: any[];

  ngOnInit() {
    
    this.ableNFTable = false;

    this.contribuinte = this.dadosService.objDados.contribuinte;
    this.periodo = this.dadosService.objDados.periodo;



    this.prestadores = [
      { cnpj: '99999999999999', qtdNf: 10,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '89999999999999', qtdNf: 20,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '79999999999999', qtdNf: 8,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '69999999999999', qtdNf: 5,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '59999999999999', qtdNf: 20,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '49999999999999', qtdNf: 15,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '39999999999999', qtdNf: 20,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 },
      { cnpj: '29999999999999', qtdNf: 20,  valorTotalNFs: 10000, somaValoTotalBaseRet:100000,valorTotalPrincRet:100000,valorTotalAdicRet:100000,valorTotalPrincNRet:100000,valorTotalAdicNRet:10000 }
    ];


    this.nfs = [
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
     { serie:'XXXXXX',numero: 'XXXXXXX', dataEmissao: '10/10/2018',valorBruto:10000,tipoServico:1,valorBaseRetNF:10000,valorRetNF:1000,valorRetServicosSubcontratados:10000,valorPrincNRetNF:1000,valorServicosPrestApos15anos:1000,valorServicosPrestApos20anos:100000,valorServicosPrestApos25anos:10000,valorAdicionalServicosPrestApos152025Anos:100000,valorAdicNRetNF:100000},
    ];

    $('#xxx').click();

    $('.pane--table2').scroll(function() {
      $('.pane--table2 table').width($('.pane--table2').width() + $('.pane--table2').scrollLeft());
    });
    
  }

  redirectNf(prestador: any){

    this.ableNFTable = true;

    this.prestador=prestador;

  }



}
