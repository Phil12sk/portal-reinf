import { Component, OnInit, Input } from '@angular/core';

import { EvtPendente } from '../../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { R1070Model } from '../../../../core/_model/r1070.model';
import { ExcelService } from '../../../_service/excel.service';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r1070',
  templateUrl: './painel-de-controle-r1070.component.html',
  styleUrls: ['./painel-de-controle-r1070.component.css']
})
export class PainelDeControleR1070Component implements OnInit {

  constructor(private excelService: ExcelService) { }

  r1070: R1070Model;
  @Input() contribuinte: any;
  @Input() periodo: any;
  @Input()  flag: any;

  exportToExcel(){
    const builtExcelFile = []
    const layout: R1070Model[] = [
      {
        TP_OPER: 'xxxxxxxxx',
        NM_LAYOUT: 'xxxxxxxxx',
        CD_SIS_ORIG: 'xxxxxxxxx',
        DT_MOVIMENT: 'xxxxxxxxx',
        TP_INSCRI: 'xxxxxxxxx',
        NR_INSCRI: 'xxxxxxxxx',
        TP_PROCES: 'xxxxxxxxx',
        NR_PROCES: 'xxxxxxxxx',
        DT_INI_VAL: 'xxxxxxxxx',
        DT_FIM_VAL: 'xxxxxxxxx',
        IN_AUTORIA: 'xxxxxxxxx',
        CD_SUSPEN: 'xxxxxxxxx',
        IN_SUSPEN: 'xxxxxxxxx',
        DT_DECISAO: 'xxxxxxxxx',
        IN_DEPOSIT: 'xxxxxxxxx',
        CD_UF: 'xxxxxxxxx',
        CD_MUNIC: 'xxxxxxxxx',
        CD_VARA: 'xxxxxxxxx'
      }
    ]
    for(let i = 0; i < layout.length; i++){
      const file = {
        'Tipo de Operação (1-I / 2-A / 3-E)': '',
        'Layout REINF': '',
        'Sistema de Origem': '',
        'Data Movimentação': '',
        'Tipo Inscrição (1-CNPJ / 2-CPF)': '',
        'Número Inscrição do Contribuinte': '',
        'Tipo de Processo (1-Adm / 2-Judicial)': '',
        'Número de Processo': '',
        'Data Início de Validade': '',
        'Data Final de validade': '',
        'Ind. Autoria Judicial (1-Próprio / 2-Outra)': '',
        'Susp. Adicional - CodSup': '',
        'Ind.  Susp . exigibilidade - indSusp': '',
        'Data da Decisão': '',
        'Ind. Depósito (S-Sim / N-Não)': '',
        'UF da Vara': '',
        'Cód. do Município da Vara': '',
        'Cód. de Ident. da Vara': ''
      }

      file['Tipo de Operação (1-I / 2-A / 3-E)'] = layout[i].TP_OPER
      file['Layout REINF'] = layout[i].NM_LAYOUT
      file['Sistema de Origem'] = layout[i].CD_SIS_ORIG
      file['Data Movimentação'] = layout[i].DT_MOVIMENT
      file['Tipo Inscrição (1-CNPJ / 2-CPF)'] = layout[i].TP_INSCRI
      file['Número Inscrição do Contribuinte'] = layout[i].NR_INSCRI
      file['Tipo de Processo (1-Adm / 2-Judicial)'] = layout[i].TP_PROCES
      file['Número de Processo'] = layout[i].NR_PROCES
      file['Data Início de Validade'] = layout[i].DT_INI_VAL
      file['Data Final de validade'] = layout[i].DT_FIM_VAL
      file['Ind. Autoria Judicial (1-Próprio / 2-Outra)'] = layout[i].IN_AUTORIA
      file['Susp. Adicional - CodSup'] = layout[i].CD_SUSPEN
      file['Ind.  Susp . exigibilidade - indSusp'] = layout[i].IN_SUSPEN
      file['Data da Decisão'] = layout[i].DT_DECISAO
      file['Ind. Depósito (S-Sim / N-Não)'] = layout[i].IN_DEPOSIT
      file['UF da Vara'] = layout[i].CD_UF
      file['Cód. do Município da Vara'] = layout[i].CD_MUNIC
      file['Cód. de Ident. da Vara'] = layout[i].CD_VARA
      builtExcelFile.push(file)
    }
    this.excelService.exportAsExcelFile(builtExcelFile, 'r1070_excel')
  }

  ngOnInit() {
    this.r1070 = {
      TP_OPER: 'xxxxxxxxx',
      NM_LAYOUT: 'xxxxxxxxx',
      CD_SIS_ORIG: 'xxxxxxxxx',
      DT_MOVIMENT: 'xxxxxxxxx',
      TP_INSCRI: 'xxxxxxxxx',
      NR_INSCRI: 'xxxxxxxxx',
      TP_PROCES: 'xxxxxxxxx',
      NR_PROCES: 'xxxxxxxxx',
      DT_INI_VAL: 'xxxxxxxxx',
      DT_FIM_VAL: 'xxxxxxxxx',
      IN_AUTORIA: 'xxxxxxxxx',
      CD_SUSPEN: 'xxxxxxxxx',
      IN_SUSPEN: 'xxxxxxxxx',
      DT_DECISAO: 'xxxxxxxxx',
      IN_DEPOSIT: 'xxxxxxxxx',
      CD_UF: 'xxxxxxxxx',
      CD_MUNIC: 'xxxxxxxxx',
      CD_VARA: 'xxxxxxxxx'
    };
    $('#xxx').click();

    $('.pane-hScroll').scroll(function () {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });

  }

}
