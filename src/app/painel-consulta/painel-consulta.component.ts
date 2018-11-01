import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { DocumentModel } from '../../core/_model/document.model';
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

//   columnDefs = [
//     {headerName: 'Make', field: 'make'},
//     {headerName: 'Model', field: 'model'},
//     {headerName: 'Price', field: 'price'}
// ];

// rowData = [
//     {make: 'Toyota', model: 'Celica', price: 35000},
//     {make: 'Ford', model: 'Mondeo', price: 32000},
//     {make: 'Porsche', model: 'Boxter', price: 72000}
// ];
columnDefs = [
  {headerName: 'Make', field: 'make'},
  {headerName: 'Model', field: 'model'},
  {headerName: 'Price', field: 'price', editable: true}
];

rowData = [];

  ngOnInit() {

    this.selectedOptionIclusion = "";
    this.btnIncluir = false;

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

  INCLUIR() {
    // console.log("Opção selecionada: " + this.selectedOptionIclusion);
    this.inclusaoLayout = this.selectedOptionIclusion;
  }

  onChange() {

    this.btnIncluir = false;
    if (this.selectedOptionIclusion != "") {
      this.btnIncluir = true;
    }
    // console.log("Opção selecionada: " + this.selectedOptionIclusion);
    // console.log("Opção btnIncluir: " + this.btnIncluir);

  }

}
