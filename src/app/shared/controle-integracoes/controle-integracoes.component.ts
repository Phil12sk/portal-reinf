import { Component, OnInit } from '@angular/core';
import { LayoutModel } from '../../core/_model/layout.model';
import { DocumentModel } from '../../core/_model/document.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-controle-integracoes',
  templateUrl: './controle-integracoes.component.html',
  styleUrls: ['./controle-integracoes.component.css']
})
export class ControleIntegracoesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  hasValue: boolean = false
  consultForm: FormGroup
  olas = "Hellooooo";
  arrayTeste: any = {
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    layouts: [{
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
    }]
  }

  consult($event){
    this.router.navigate(['/home/controle-integracoes/no-integration'])
    this.hasValue = true
    /*this.layoutsService.getInfos()
      .subscribe(resp => {
        this.infos = resp
        this.hasValue = true
      },
      error => {
        this.router.navigate(['/home/controle-integracoes/no-integration'])
      }
    }) */
  }

  ngOnInit() {
    this.router.navigate(['/home/controle-integracoes'])
    this.consultForm = this.formBuilder.group({
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })
  }
}