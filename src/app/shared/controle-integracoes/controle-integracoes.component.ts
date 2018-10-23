import { Component, OnInit } from '@angular/core';
import { LayoutModel } from '../../core/_model/layout.model';
import { DocumentModel } from '../../core/_model/document.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../../core/_service/dados.service';
import { R1000Model } from '../../core/_model/r1000.model';
declare var $: any;

@Component({
  selector: 'app-controle-integracoes',
  templateUrl: './controle-integracoes.component.html',
  styleUrls: ['./controle-integracoes.component.css']
})
export class ControleIntegracoesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private dadosService: DadosService) { }
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  hasValue: boolean = false
  consultForm: FormGroup

  r1000Model: R1000Model

  arrayTeste: any = {
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    layouts: [
      {
        label: 'R1000', value: 'R1000'
      },
      {
        label: 'R1070', value: 'R1070'
      },
      {
        label: 'R2010', value: 'R2010'
      },
      {
        label: 'R2060', value: 'R2060'
      }
    ]
  }

  getInfoByDocument(document, layout){
    "['/home/controle-integracoes/'+layout.value]"
    let date = this.consultForm.value.periodo.substr(0,4) + '-' + this.consultForm.value.periodo.substr(4,2)
    /*this.layoutsService.getInfoByDocLayDate(document, layout, date)
      .subscribe(resp => {
        this.dadosService.objDados = resp
      }
    }) */
  }

  consult($event){
    this.router.navigate(['/home/controle-integracoes/no-integration'])
    this.hasValue = true
    /*this.layoutsService.getInfos()
      .subscribe(resp => {
        this.r1000Model = resp
        this.hasValue = true
      },
      error => {
        this.router.navigate(['/home/controle-integracoes/no-integration'])
      }
    }) */
  }

  ngOnInit() {
    this.r1000Model = {
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
      CD_CNPJ_EFR: '00123456000167',
      FILLER: 'string'
    }

    this.dadosService.objDados = this.r1000Model
    this.router.navigate(['/home/controle-integracoes'])
    this.consultForm = this.formBuilder.group({
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })
  }
}