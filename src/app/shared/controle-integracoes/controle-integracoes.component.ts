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
  evtValue: any = 'R1000'
  consultForm: FormGroup
  arrayTeste: any = {
    cnpj: 'xx.xxx.xxx/xxxx-xx',
    layouts: [{
      label: 'R1000', value: 'R1000'
    },
    {
      label: 'R2010', value: 'R2010'
    }]
  }
  
  redirect(){
    this.router.navigate([`/home/controle-integracoes/${this.evtValue}`])
  }

  consult($event){
    
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