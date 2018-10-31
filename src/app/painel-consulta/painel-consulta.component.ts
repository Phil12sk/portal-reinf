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

  ngOnInit() {

    this.consultForm = this.formBuilder.group({
      document: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })
  }

}
