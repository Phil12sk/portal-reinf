import { Component, OnInit, Input } from '@angular/core';

import { EvtPendente } from '../../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { R1000Model } from '../../../../core/_model/r1000.model';
import { ExcelService } from '../../../_service/excel.service';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r1000',
  templateUrl: './painel-de-controle-r1000.component.html',
  styleUrls: ['./painel-de-controle-r1000.component.css']
})
export class PainelDeControleR1000Component implements OnInit {

  constructor(private excelService: ExcelService) { }

  r1000: R1000Model;
  @Input() contribuinte: any;
  @Input() periodo: any;
  @Input()  flag: any;

  exportToExcel(){
    const builtExcelFile = []
    const layout: R1000Model[] = [
      {
        TP_OPER: '1',
        NM_LAYOUT: 'R1000',
        CD_SIS_ORIG: '123',
        DT_MOVIMENT: '2018.10.01',
        TP_INSCRI: '1',
        NR_INSCRI: '12345678901234',
        DT_INI_VAL: '2018-09',
        DT_FIM_VAL: '2018-10',
        CD_CLASSTRIB: '01',
        IN_ESCRITUR: '0',
        IN_DESONERA: '0',
        IN_ACO_MULT: '1',
        IN_SIT_PJ: '3',
        NM_RESP_CON: 'José da Silva',
        CD_CPF_CON: '12345678900',
        CD_TEL_CON: '551125526776',
        CD_CEL_CON: '5511987654321',
        NM_EMAIL_CON: 'contato@teste.com',
        CD_CNPJ_EMP: '00123456000167',
        NM_RAZAO_EMP: 'Empresa Testa LTDA',
        NM_CON_EMP: 'João José',
        CD_TEL_EMP: '5511987654321',
        NM_EMAIL_EMP: 'empresa@teste.com.br',
        ID_EFR: '1',
        CD_CNPJ_EFR: '00123456000167'
      }
    ]
    for(let i = 0; i < layout.length; i++){
      const file = 
      {
        'Tipo de Operação (1-I / 2-A / 3-E)': '',
        'Layout REINF': '',
        'Sistema de Origem': '',
        'Data Movimentação': '',
        'Data Início de Validade': '',
        'Data Fim de Validade': '',
        'Código Classificação Tributo - Tabela 8': '',
        'Inscrição escrituração ECD (0-Não faz / 1-Faz ECD)': '',
        'Inscrição Desoneração (0-Não Aplicável / 1-Aplicável)': '',
        'Ind. Acordo Intern. Isen. Multa (0-Sem acordo / 1-Com acordo)': '',
        'Ind. Sit. (0-Sit.Normal / 1-Extinção / 2-Fusão / 3-Cisão / 4-Incorporação)': '',
        'Nome Responsável Contato da Empresa': '',
        'Código CPF Contato da Empresa': '',
        'Código Telefone Contato da Empresa': '',
        'Código Celular Contato da Empresa': '',
        'Nome Email Contato da Empresa': '',
        'Código CNPJ Empresa de Software': '',
        'Nome Razão Social Empresa de Software': '',
        'Nome Contato Empresa de Software': '',
        'Código Telefone Empresa de Software': '',
        'Nome Email Empresa de Software': '',
        'Ident. EFR': '',
        'Código CNPJ EFR': ''
      }
      file['Tipo de Operação (1-I / 2-A / 3-E)'] = layout[i].TP_OPER
      file['Layout REINF'] = layout[i].NM_LAYOUT
      file['Sistema de Origem'] = layout[i].CD_SIS_ORIG
      file['Data Movimentação'] = layout[i].DT_MOVIMENT
      file['Data Início de Validade'] = layout[i].DT_INI_VAL
      file['Data Fim de Validade'] = layout[i].DT_FIM_VAL
      file['Código Classificação Tributo - Tabela 8'] = layout[i].CD_CLASSTRIB
      file['Inscrição escrituração ECD (0-Não faz / 1-Faz ECD)'] = layout[i].IN_ESCRITUR
      file['Inscrição Desoneração (0-Não Aplicável / 1-Aplicável)'] = layout[i].IN_DESONERA
      file['Ind. Acordo Intern. Isen. Multa (0-Sem acordo / 1-Com acordo)'] = layout[i].IN_ACO_MULT
      file['Ind. Sit. (0-Sit.Normal / 1-Extinção / 2-Fusão / 3-Cisão / 4-Incorporação)'] = layout[i].IN_SIT_PJ
      file['Nome Responsável Contato da Empresa'] = layout[i].NM_RESP_CON
      file['Código CPF Contato da Empresa'] = layout[i].CD_CPF_CON
      file['Código Telefone Contato da Empresa'] = layout[i].CD_TEL_CON
      file['Código Celular Contato da Empresa'] = layout[i].CD_CEL_CON
      file['Nome Email Contato da Empresa'] = layout[i].NM_EMAIL_CON
      file['Código CNPJ Empresa de Software'] = layout[i].CD_CNPJ_EMP
      file['Nome Razão Social Empresa de Software'] = layout[i].NM_RAZAO_EMP
      file['Nome Contato Empresa de Software'] = layout[i].NM_CON_EMP
      file['Código Telefone Empresa de Software'] = layout[i].CD_TEL_EMP
      file['Nome Email Empresa de Software'] = layout[i].NM_EMAIL_EMP
      file['Ident. EFR'] = layout[i].ID_EFR
      file['Código CNPJ EFR'] = layout[i].CD_CNPJ_EFR
      builtExcelFile.push(file)
    }
    
    this.excelService.exportAsExcelFile(builtExcelFile, 'r1000_excel')
  }

  ngOnInit() {
    this.r1000 = {
      TP_OPER: '1',
      NM_LAYOUT: 'R1000',
      CD_SIS_ORIG: '123',
      DT_MOVIMENT: '2018.10.01',
      TP_INSCRI: '1',
      NR_INSCRI: '12345678901234',
      DT_INI_VAL: '2018-09',
      DT_FIM_VAL: '2018-10',
      CD_CLASSTRIB: '01',
      IN_ESCRITUR: '0',
      IN_DESONERA: '0',
      IN_ACO_MULT: '1',
      IN_SIT_PJ: '3',
      NM_RESP_CON: 'José da Silva',
      CD_CPF_CON: '12345678900',
      CD_TEL_CON: '551125526776',
      CD_CEL_CON: '5511987654321',
      NM_EMAIL_CON: 'contato@teste.com',
      CD_CNPJ_EMP: '00123456000167',
      NM_RAZAO_EMP: 'Empresa Testa LTDA',
      NM_CON_EMP: 'João José',
      CD_TEL_EMP: '5511987654321',
      NM_EMAIL_EMP: 'empresa@teste.com.br',
      ID_EFR: '1',
      CD_CNPJ_EFR: '00123456000167'     
    };
    $('#xxx').click();

    $('.pane-hScroll').scroll(function() {
      $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
    });
    
  }

}
