import { Component, OnInit, Input } from '@angular/core';

import { EvtPendente } from '../../../../core/_model/evtPendente.mode';
import { ContribuintePainelControle } from '../../../../core/_model/contribuintePainelControle.model';
import { DadosService } from '../../../../core/_service/dados.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { R2060Model } from '../../../../core/_model/r2060.model';
import { ExcelService } from '../../../_service/excel.service';

declare var $: any;

@Component({
  selector: 'app-painel-de-controle-r2060',
  templateUrl: './painel-de-controle-r2060.component.html',
  styleUrls: ['./painel-de-controle-r2060.component.css']
})
export class PainelDeControleR2060Component implements OnInit {

  constructor(private excelService: ExcelService) { }
  
    r2060: R2060Model;
  
    @Input() contribuinte: any;
    @Input() periodo: any;
    @Input()  flag: any;

    exportToExcel(){
      const builtExcelFile = []
      const layout: R2060Model[] = [
        {
          TP_OPER:'XXXXXXXXXX',
          NM_LAYOUT:'XXXXXXXXXX',
          CD_SIS_ORIG:'XXXXXXXXXX',
          CD_PRODUTO:'XXXXXXXXXX',
          CD_RETENCAO:'XXXXXXXXXX',
          DT_MOVIMENT:'XXXXXXXXXX',
          TP_INSCRI:'XXXXXXXXXX',
          NR_INSCRI:'XXXXXXXXXX',
          TP_INSC_EST:'XXXXXXXXXX',
          NR_INSC_EST:'XXXXXXXXXX',
          VL_TOT_RECBRUTA:'XXXXXXXXXX',
          VL_TOT_APUESTAB:'XXXXXXXXXX',
          VL_TOT_EXIGSUSP:'XXXXXXXXXX',
          CD_ATI_ECON:'XXXXXXXXXX',
          VL_REC_ATIV:'XXXXXXXXXX',
          VL_EXC_REC:'XXXXXXXXXX',
          VL_ADI_REC:'XXXXXXXXXX',
          VL_BASE_CALC:'XXXXXXXXXX',
          VL_PREV_REC:'XXXXXXXXXX',
          VL_PROC_SUSP:'XXXXXXXXXX',
          TP_PROCESSO:'XXXXXXXXXX',
          NR_PROCESSO:'XXXXXXXXXX',
          CD_IND_SUSP:'XXXXXXXXXX',
          TP_AJUSTE:'XXXXXXXXXX',
          CD_AJUSTE:'XXXXXXXXXX',
          VL_AJUSTE:'XXXXXXXXXX',
          DESC_AJUSTE:'XXXXXXXXXX',
          DT_AJUSTE:'XXXXXXXXXX' 
        }
      ]
      for(let i = 0; i < layout.length; i++){
        const file = {
          'TipodeOperação(1-I/2-A/3-E/4-R)': '',
          'LayoutREINF': '',
          'SistemadeOrigem': '',
          'CódigoProduto': '',
          'CódigoRetenção': '',
          'DataMovimentação': '',
          'TipoInscrição(1-CNPJ/2-CPF)': '',
          'NúmeroInscriçãodoContribuinte': '',
          'TipoInscriçãoEstadual(1-CNPJ/4-CNO)': '',
          'NúmeroInscriçãoEstadualEstabelecimento': '',
          'ValordaReceitaBrutaTotaldoEstabelecimento': '',
          'ValorTotalCPRBdoEstabelecimento': '',
          'ValorCPRBSusp.Total': '',
          'CódigoAtividadeEconômica-tabela9': '',
          'ValorTotaldaReceitaAtiv.': '',
          'ValorTotaldasExclusõesReceitaBruta': '',
          'ValorTotaldasAdiçõesReceitaBruta': '',
          'ValorBaseCPRB': '',
          'ValorCPRBApur.': '',
          'ValorCPRBSusp.': '',
          'TipoProcesso(1-Administrativo/2-Judicial)': '',
          'NúmeroProcesso': '',
          'CódigoIndSusp.-CodSup': '',
          'TipoAjuste(0-Redução/1-Acréscimo)': '',
          'CódigoAjuste': '',
          'ValorAjuste': '',
          'DescriçãoAjuste': '',
          'DataAjuste': ''
        }
        file['TipodeOperação(1-I/2-A/3-E/4-R)'] = layout[i].TP_OPER
        file['LayoutREINF'] = layout[i].NM_LAYOUT
        file['SistemadeOrigem'] = layout[i].CD_SIS_ORIG
        file['CódigoProduto'] = layout[i].CD_PRODUTO
        file['CódigoRetenção'] = layout[i].CD_RETENCAO
        file['DataMovimentação'] = layout[i].DT_MOVIMENT
        file['TipoInscrição(1-CNPJ/2-CPF)'] = layout[i].TP_INSCRI
        file['NúmeroInscriçãodoContribuinte'] = layout[i].NR_INSCRI
        file['TipoInscriçãoEstadual(1-CNPJ/4-CNO)'] = layout[i].TP_INSC_EST
        file['NúmeroInscriçãoEstadualEstabelecimento'] = layout[i].NR_INSC_EST
        file['ValordaReceitaBrutaTotaldoEstabelecimento'] = layout[i].VL_TOT_RECBRUTA
        file['ValorTotalCPRBdoEstabelecimento'] = layout[i].VL_TOT_APUESTAB
        file['ValorCPRBSusp.Total'] = layout[i].VL_TOT_EXIGSUSP
        file['CódigoAtividadeEconômica-tabela9'] = layout[i].CD_ATI_ECON
        file['ValorTotaldaReceitaAtiv.'] = layout[i].VL_REC_ATIV
        file['ValorTotaldasExclusõesReceitaBruta'] = layout[i].VL_EXC_REC
        file['ValorTotaldasAdiçõesReceitaBruta'] = layout[i].VL_ADI_REC
        file['ValorBaseCPRB'] = layout[i].VL_BASE_CALC
        file['ValorCPRBApur.'] = layout[i].VL_PREV_REC
        file['ValorCPRBSusp.'] = layout[i].VL_PROC_SUSP
        file['TipoProcesso(1-Administrativo/2-Judicial)'] = layout[i].TP_PROCESSO
        file['NúmeroProcesso'] = layout[i].NR_PROCESSO
        file['CódigoIndSusp.-CodSup'] = layout[i].CD_IND_SUSP
        file['TipoAjuste(0-Redução/1-Acréscimo)'] = layout[i].TP_AJUSTE
        file['CódigoAjuste'] = layout[i].CD_AJUSTE
        file['ValorAjuste'] = layout[i].VL_AJUSTE
        file['DescriçãoAjuste'] = layout[i].DESC_AJUSTE
        file['DataAjuste'] = layout[i].DT_AJUSTE
        builtExcelFile.push(file)
      }
      this.excelService.exportAsExcelFile(builtExcelFile, 'r2060_excel')
    }
  
    ngOnInit() {
      this.r2060 = {
        TP_OPER:'XXXXXXXXXX',
        NM_LAYOUT:'XXXXXXXXXX',
        CD_SIS_ORIG:'XXXXXXXXXX',
        CD_PRODUTO:'XXXXXXXXXX',
        CD_RETENCAO:'XXXXXXXXXX',
        DT_MOVIMENT:'XXXXXXXXXX',
        TP_INSCRI:'XXXXXXXXXX',
        NR_INSCRI:'XXXXXXXXXX',
        TP_INSC_EST:'XXXXXXXXXX',
        NR_INSC_EST:'XXXXXXXXXX',
        VL_TOT_RECBRUTA:'XXXXXXXXXX',
        VL_TOT_APUESTAB:'XXXXXXXXXX',
        VL_TOT_EXIGSUSP:'XXXXXXXXXX',
        CD_ATI_ECON:'XXXXXXXXXX',
        VL_REC_ATIV:'XXXXXXXXXX',
        VL_EXC_REC:'XXXXXXXXXX',
        VL_ADI_REC:'XXXXXXXXXX',
        VL_BASE_CALC:'XXXXXXXXXX',
        VL_PREV_REC:'XXXXXXXXXX',
        VL_PROC_SUSP:'XXXXXXXXXX',
        TP_PROCESSO:'XXXXXXXXXX',
        NR_PROCESSO:'XXXXXXXXXX',
        CD_IND_SUSP:'XXXXXXXXXX',
        TP_AJUSTE:'XXXXXXXXXX',
        CD_AJUSTE:'XXXXXXXXXX',
        VL_AJUSTE:'XXXXXXXXXX',
        DESC_AJUSTE:'XXXXXXXXXX',
        DT_AJUSTE:'XXXXXXXXXX' 
      }
  
      $('#xxx').click();
  
      $('.pane-hScroll').scroll(function() {
        $('.pane-vScroll').width($('.pane-hScroll').width() + $('.pane-hScroll').scrollLeft());
      });
      
    }
}




