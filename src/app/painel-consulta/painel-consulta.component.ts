import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-consulta',
  templateUrl: './painel-consulta.component.html',
  styleUrls: ['./painel-consulta.component.css']
})
export class PainelConsultaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  consultForm: FormGroup
  selectedOptionIclusion: any;
  inclusaoLayout: any;
  btnIncluir: boolean;
  btnConsultar: boolean;
  selectedYearConsult: any;
  selectedCnpjConsult: any;
  selectedLayoutConsult: any;
  consultaLayout=false;

columnDefs = [
  {headerName: 'Make', field: 'make'},
  {headerName: 'Model', field: 'model'},
  {headerName: 'Price', field: 'price', editable: true}
];

rowData = [];

fontePagadora = [
  '03.080.047/0001-09	- Fundação Santander',
  '03.209.092/0001-02	- Santander Capitalização',
  '04.127.332/0001-92	- Universia',
  '04.270.778/0001-71	- Santander Participações',
  '04.536.327/0001-33	- Santander Cultural',
  '06.136.920/0001-18	- Zurich Santander Brasil Seguros',
  '07.707.650/0001-10	- Santander Financiamentos',
  '10.866.788/0001-77	- Banco Bandepe',
  '10.977.742/0001-25	- Santander Brasil Asset Manegement DTVM',
  '13.615.969/0001-19	- Evidence Previdencia',
  '18.511.694/0001-97	- WebCasas S/A',
  '47.193.149/0001-06	- Santander Leasing Arrendamento Mercantil',
  '51.014.223/0001-49	- Santander Corretora',
  '52.312.907/0001-90	- Santander Serviços Tecnicos',
  '55.942.312/0001-06	- Santander Brasil Consorcios',
  '62.318.407/0001-19	- S3 DTVM',
  '62.307.848/0001-15	- Banco RCI',
  '62.474.093/0001-43	- Fundaçao Sudameris',
  '62.588.793/0001-69	- Isban Brasil S/A',
  '87.373.109/0001-06	- Zurich Santander Brasil Seguros e Previdencia S/A',
  '90.400.888/0001-42	- Banco Santnader Brasil S/A',
  '94.870.557/0001-27	- Produban Serviços de Informática'
];

  ngOnInit() {

    this.selectedOptionIclusion = "";
    this.selectedYearConsult = "";
    this.selectedCnpjConsult = "";
    this.selectedLayoutConsult = "";
    this.btnIncluir = false;
    this.btnConsultar = false;
    this.consultaLayout=false;


    this.consultForm = this.formBuilder.group({
      document: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })


    fetch('https://api.myjson.com/bins/15psn9')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }

  ngAfterViewInit(){
    this.selectedOptionIclusion = "";
    this.btnIncluir = false;
    this.btnConsultar = false;
    this.selectedYearConsult = "";
    this.selectedCnpjConsult = "";
    this.selectedLayoutConsult = "";

    this.consultForm = this.formBuilder.group({
      document: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })

  }

  INCLUIR() {
    // console.log("Opção selecionada: " + this.selectedOptionIclusion);
    this.inclusaoLayout = this.selectedOptionIclusion;
  }

  onChange() {

    this.btnIncluir = false;
    if (this.selectedOptionIclusion != "") {
      this.btnIncluir = true;
      this.consultaLayout = false;
    }
    // console.log("Opção selecionada: " + this.selectedOptionIclusion);
    // console.log("Opção btnIncluir: " + this.btnIncluir);

  }

  consulta(){
  
    this.btnConsultar = false;

    // console.log("this.selectedYearConsult:" + this.selectedYearConsult);
    // console.log("this.selectedCnpjConsult: " + this.selectedCnpjConsult);
    // console.log("this.selectedLayoutConsult: " + this.selectedLayoutConsult);
  
    if(this.selectedYearConsult!="" && this.selectedCnpjConsult!="" && this.selectedLayoutConsult!=""){
      this.btnConsultar = true;
      this.inclusaoLayout= "";
    }
  }

  pesquisar(){
    this.consultaLayout=true;
  }
}
