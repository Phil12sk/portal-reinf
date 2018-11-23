import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroAprovacaoGradeModel } from '../../core/_model/registroAprovacaoGrade.model';

@Component({
  selector: 'app-abertura-de-grade',
  templateUrl: './abertura-de-grade.component.html',
  styleUrls: ['./abertura-de-grade.component.css']
})
export class AberturaDeGradeComponent implements OnInit {

  registroAprovacaoGradeModel: RegistroAprovacaoGradeModel[];

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit() {
   
  this.registroAprovacaoGradeModel= [
    {
      layout:"R2010",
      periodo:"2018-10",
      contribuinte:"90.400.888/0001-42",
      prestador:"80.500.889/0001-00",
      nf:"NFE833",
      usuarioSolicitacao:"LAFCAVAL",
      dataSolicitacao:"21/11/2018"

    },
    {
      layout:"R2060",
      periodo:"2018-10",
      contribuinte:"90.400.888/0001-42",
      prestador:"",
      nf:"",
      usuarioSolicitacao:"LAFCAVAL",
      dataSolicitacao:"21/11/2018"

    }

  ];
  
  }

  verificar(){


  }

}
