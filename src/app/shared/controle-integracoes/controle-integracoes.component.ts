import { Component, OnInit } from '@angular/core';
import { LayoutModel } from '../../core/_model/layout.model';
import { DocumentModel } from '../../core/_model/document.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controle-integracoes',
  templateUrl: './controle-integracoes.component.html',
  styleUrls: ['./controle-integracoes.component.css']
})
export class ControleIntegracoesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  evtValue: any
  hasSelected: boolean = true
  consultForm: FormGroup
  layoutType: boolean = true
  layouts: LayoutModel[] = [
    {label: 'R2010', value: 'R2010'},
    {label: 'R2099', value: 'R2099'}
  ]
  documents: DocumentModel[] = [
    {label: '12345678000100', value: '12345678000100'},
    {label: '22345679000101', value: '22345679000101'}
  ]
  documents1: DocumentModel[] = [
    {label: '12345678000100', value: '12345678000100'},
    {label: '22345679000101', value: '22345679000101'}
  ]
  

  teste($event){
    this.router.navigate([`/home/controle-integracoes/${this.evtValue}`])
  }

  teste2(){
    console.log('teste')
    this.layoutType = false
  }

  layoutValidation($event){
    if($event.target.value === 'R2099'){
      this.layoutType = false
      this.evtValue = 'no-integration'
    }
    else if($event.target.value === 'R2010'){
      this.layoutType = true
      this.evtValue = $event.target.value
    }
    
  }

  ngOnInit() {
    this.router.navigate(['/home/controle-integracoes'])
    this.consultForm = this.formBuilder.group({
      documentContr: this.formBuilder.control('', [Validators.required]),
      documentPrest: this.formBuilder.control('', [Validators.required]),
      layout: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })
  }
}