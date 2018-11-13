import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LayoutModel } from '../../core/_model/layout.model';
import { DocumentModel } from '../../core/_model/document.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../../core/_service/dados.service';
import { R1000Model } from '../../core/_model/r1000.model';
import { ContribuintePainelControle } from '../../core/_model/contribuintePainelControle.model';
import { PainelDeConsultaService } from '../../core/_service/painel-de-consulta.service';
declare var $: any;

@Component({
  selector: 'app-controle-de-registro',
  templateUrl: './controle-de-registro.component.html',
  styleUrls: ['./controle-de-registro.component.css'],
  animations: [
    trigger('tableAppear', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('1000ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ControleDeRegistroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private painelDeConsultaService: PainelDeConsultaService) { }
  
  tableState = 'ready'
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  hasValue: boolean = false
  consultForm: FormGroup
  flagColor: String;
  enviar: any = "Marina";
  today = new Date()
  systems: any[] = []
  previousFiveDays: any
  contribuintes: any = [
    {
      document: '12.345.678/0001-00 - Empresa Teste 1',
      layout: [
        { label: 'R1070', value: 'red' },
        { label: 'R2010', value: 'red' },
        { label: 'R2060', value: 'red' }
      ]
    },
    {
      document: '87.345.678/0001-00 - Empresa Teste 2',
      layout: [
        { label: 'R1070', value: 'red' },
        { label: 'R2010', value: 'red' },
        { label: 'R2060', value: 'red' }
      ]
    }
  ]
  
  documents: any[] = []

  consult($event){
    this.hasValue = true
  }

  ngOnInit() {
    this.painelDeConsultaService.getCompany()
    .subscribe(resp => this.documents = resp)
    this.painelDeConsultaService.getSystem()
    .subscribe(resp => this.systems = resp)
    this.today;
    const newDate = new Date(this.today);

    newDate.setDate(newDate.getDate() - 4);
    var dd = newDate.getDate().toString();
    var mm = (newDate.getMonth() + 1).toString();
    var y = newDate.getFullYear().toString();
    if(
      dd == "1" || dd == "2" || dd == "3" || dd == "4" || dd == "5" || 
      dd == "6" || dd == "7" || dd == "8" || dd == "9" ){
        dd = "0" + newDate.getDate();
    }

    if(
      mm == "1" || mm == "2" || mm == "3" || mm == "4" || mm == "5" || 
      mm == "6" || mm == "7" || mm == "8" || mm == "9"){
        var mm = "0" + (newDate.getMonth() + 1).toString();
      }
    
    this.previousFiveDays = (dd + '/' + mm + '/' + + y);
    this.flagColor = 'red';
    this.router.navigate(['/home/controle-de-registros'])
    this.consultForm = this.formBuilder.group({
      dateInit: this.formBuilder.control(this.previousFiveDays.toLocaleString(), [
        Validators.required, Validators.minLength(8)
      ]),
      dateEnd: this.formBuilder.control(this.today.toLocaleString(), [
        Validators.required, Validators.minLength(8)
      ]),
      system: this.formBuilder.control('', Validators.required),
      document: this.formBuilder.control('', Validators.required)
    })
  }
}