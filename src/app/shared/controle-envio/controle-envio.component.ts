import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocumentModel } from '../../core/_model/document.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controle-envio',
  templateUrl: './controle-envio.component.html',
  styleUrls: ['./controle-envio.component.css']
})
export class ControleEnvioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  
  consultForm: FormGroup
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  documents: DocumentModel[] = [
    {label: '12345678000100', value: '12345678000100'},
    {label: '22345679000101', value: '22345679000101'}
  ]

  teste($event){
    this.router.navigate(['/home/controle-envio/table-enviados'])
  }

  ngOnInit() {
    this.router.navigate(['/home/controle-envio'])
    this.consultForm = this.formBuilder.group({
      document: this.formBuilder.control('', [Validators.required]),
      periodo: this.formBuilder.control('', [
        Validators.required, Validators.minLength(6),
        Validators.pattern(this.datePattern)
      ])
    })
  }
}