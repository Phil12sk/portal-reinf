import { Component, OnInit } from '@angular/core';
import { DocumentModel } from '../../core/_model/document.model';
import { LayoutModel } from '../../core/_model/layout.model';
import { TipoSolicitacaoModel } from '../../core/_model/tipoSolicitacao.model';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';



@Component({
  selector: 'app-solicitar-envio',
  templateUrl: './solicitar-envio.component.html',
  styleUrls: ['./solicitar-envio.component.css']
})
export class SolicitarEnvioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  hasSelected: boolean = true
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/

  consultForm: FormGroup
  items = []

  layouts: LayoutModel[] = [
    {label: 'R2010', value: 'R2010'},
    {label: 'R2099', value: 'R2099'}
  ]
  documents: DocumentModel[] = [
    {label: '12345678000100', value: '12345678000100'},
    {label: '22345679000101', value: '22345679000101'}
  ]
  tiposSolicitacao: TipoSolicitacaoModel[] = [
    {label: 'I-Inclusão', value: 'inclusao'},
    {label: 'F-Fechamento', value: 'fechamento'}
  ]

  solicitar(value: boolean){
    this.hasSelected = value
    this.addData()
  }

  addData(): void{
    this.items.push(this.consultForm.value)
  }

  enviar($event){
    alert('implementar envio');
  }

  remove(item: any){
    this.items.splice(this.items.indexOf(item), 1)
    console.log(this.items)
  }

  removeAll($event){
    this.items.splice(0, this.items.length)
    console.log(this.items.length)
  }
  
  ngOnInit() {
    this.consultForm = this.formBuilder.group({
      documentContr: this.formBuilder.control('', [Validators.required]),
      layout: this.formBuilder.control('', [Validators.required]),
      tipoSolicitacao: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, 
        Validators.minLength(6), Validators.pattern(this.datePattern)
      ])
    })
  }
}