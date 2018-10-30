import { Component, OnInit } from '@angular/core';
import { LayoutModel } from '../../core/_model/layout.model';
import { DocumentModel } from '../../core/_model/document.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../../core/_service/dados.service';
import { R1000Model } from '../../core/_model/r1000.model';
import { ContribuintePainelControle } from '../../core/_model/contribuintePainelControle.model';
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
  flagColor: String;
  enviar: any = "Marina";
  contribuintes: any = [
    {
      document: '12345678000100',
      layout: [
        { label: 'R1070', value: 'red' },
        { label: 'R2010', value: 'red' },
        { label: 'R2060', value: 'red' }
      ]
    },
    {
      document: '87345678000100',
      layout: [
        { label: 'R1070', value: 'red' },
        { label: 'R2010', value: 'red' },
        { label: 'R2060', value: 'red' }
      ]
    }
  ]


  getInfoByDocument(document, layout){
    "['/home/controle-integracoes/'+layout.value]"
    let date = this.consultForm.value.periodo.substr(0,4) + '-' + this.consultForm.value.periodo.substr(4,2)
  }

  consult($event){
    this.hasValue = true
  }

  redirect(layout: any, flag: any, contribuinte: any) {
    this.dadosService.objDados = {
      "contribuinte": contribuinte
    };  
    this.router.navigate([`/home/controle-de-registros/controle-de-registros-${layout}`])
  }

  ngOnInit() {
    this.flagColor = 'red';
    this.router.navigate(['/home/controle-de-registros'])
    this.consultForm = this.formBuilder.group({
      dateInit: this.formBuilder.control('', [
        Validators.required, Validators.minLength(8),
        Validators.pattern(this.datePattern)
      ]),
      dateEnd: this.formBuilder.control('', [
        Validators.required, Validators.minLength(8),
        Validators.pattern(this.datePattern)
      ])
    })
  }
}