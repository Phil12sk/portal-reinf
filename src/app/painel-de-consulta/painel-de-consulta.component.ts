import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PainelDeConsultaService } from '../core/_service/painel-de-consulta.service';

@Component({
  selector: 'app-painel-de-consulta',
  templateUrl: './painel-de-consulta.component.html',
  styleUrls: ['./painel-de-consulta.component.css']
})
export class PainelDeConsultaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private painelDeConsultaService: PainelDeConsultaService) { }

  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  consultForm: FormGroup
  selectedOptionIclusion: any;
  inclusaoLayout: any;
  btnIncluir: boolean;
  btnConsultar: boolean;
  selectedYearConsult: any;
  selectedCnpjConsult: any;
  selectedCnpjConsult1: any;
  selectedLayoutConsult: any;
  isFilterAble: boolean = true
  consultaLayout=false;
  layoutSelected: any
  nRegistros: any[] = []
  registros: any[] = []
  fontePagadora: any = [];
  systems: any = []
  selectedOption: any
  isAble: boolean = false
  validation: number
  ableFields: boolean = false
  
  openFilter(){
    this.isFilterAble = !this.isFilterAble
  }
  
  ngOnInit() {
    this.painelDeConsultaService.getCompany()
    .subscribe(resp => this.fontePagadora = resp)
    this.painelDeConsultaService.getSystem()
    .subscribe(resp => this.systems = resp)
    this.painelDeConsultaService.getLayouts()
    .subscribe(resp => {
      for(let i = 0; i < resp.length; i++){
        if(resp[i].label === '1070' || resp[i].label === '2010' || resp[i].label === '2060'){
          this.nRegistros.push(resp[i])
        }
      }
      this.registros = resp
    })
    this.selectedOptionIclusion = "";
    this.selectedYearConsult = "";
    this.selectedCnpjConsult = "";
    this.selectedCnpjConsult1 = "";
    this.selectedLayoutConsult = "";
    this.btnIncluir = false;
    this.btnConsultar = false;
    this.consultaLayout=false;

    this.consultForm = this.formBuilder.group({
      documentContr: this.formBuilder.control('', [Validators.required]),
      documentPrest: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ]),
      notaFiscal: this.formBuilder.control(''),
      bank: this.formBuilder.control(''),
      codProduct: this.formBuilder.control(''),
      system: this.formBuilder.control(''),
      codRetention: this.formBuilder.control(''),
      layouts: this.formBuilder.control('')
    })
    this.consultForm.get('bank').disable()
  }

  INCLUIR() {
    this.inclusaoLayout = this.selectedOptionIclusion;
  }

  checkValidation(){
    
  }

  ableSearch(filter: any, validation: any) {
    this.validation = validation
    if(validation == 1){
      this.consultForm.get('bank').enable()
      this.consultForm.get('codProduct').enable()
      this.consultForm.get('system').enable()
      this.consultForm.get('codRetention').enable()
    }else if(validation == 3){
      if(filter.target.value === ""){
        this.isAble = false;
      }else{
        this.isAble = true
        this.selectedOption = filter.target.selectedOptions[0].label
        this.btnIncluir = false;
        if (this.selectedOptionIclusion != "") {
          this.btnIncluir = true;
          this.consultaLayout = false;
        }
      }
    }
  }

  consulta(){
    this.btnConsultar = false;
    if(this.selectedYearConsult!="" && this.selectedCnpjConsult!="" && this.selectedLayoutConsult!=""){
      this.btnConsultar = true;
      this.inclusaoLayout= "";
    }
  }

  pesquisar(){
    this.layoutSelected = this.selectedOption
  }
}
