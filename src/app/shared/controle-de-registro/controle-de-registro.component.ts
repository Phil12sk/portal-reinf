import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LayoutModel } from '../../core/_model/layout.model';
import { DocumentModel } from '../../core/_model/document.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../../core/_service/dados.service';
import { R1000Model } from '../../core/_model/r1000.model';
import { ContribuintePainelControle } from '../../core/_model/contribuintePainelControle.model';
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
    private dadosService: DadosService) { }
  
  tableState = 'ready'
  datePattern = /([12]\d{3}(0[1-9]|1[0-2]))/
  hasValue: boolean = false
  consultForm: FormGroup
  flagColor: String;
  enviar: any = "Marina";
  today = new Date()
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
  sistemas: any[] = [
    {label: 'AA', value: 'aa'},
    {label: 'BB', value: 'bb'},
    {label: 'CC', value: 'cc'}
  ]
  documents: DocumentModel[] = [
    {label: '03.080.047/0001-09 - Fundação Santander', value: '03080047000109'},
    {label: '03.209.092/0001-02 - Santander Capitalização', value: '03209092000102'},
    {label: '04.127.332/0001-92 - Universia', value: '04127332000192'},
    {label: '04.270.778/0001-71 - Santander Participações', value: '04270778000171'},
    {label: '04.536.327/0001-33 - Santander Cultural', value: '04536327000133'},
    {label: '06.136.920/0001-18 - Zurich Santander Brasil Seguros', value: '06136920000118'},
    {label: '07.707.650/0001-10 - Santander Financiamentos', value: '07707650000110'},
    {label: '10.866.788/0001-77 - Banco Bandepe', value: '10866788000177'},
    {label: '10.977.742/0001-25 - Santander Brasil Asset Manegement DTVM', value: '10977742000125'},
    {label: '13.615.969/0001-19 - Evidence Previdencia', value: '13615969000119'},
    {label: '18.511.694/0001-97 - WebCasas S/A', value: '18511694000197'},
    {label: '47.193.149/0001-06 - Santander Leasing Arrendamento Mercantil', value: '47193149000106'},
    {label: '51.014.223/0001-49 - Santander Corretora', value: '51014223000149'},
    {label: '52.312.907/0001-90 - Santander Serviços Tecnicos', value: '52312907000190'},
    {label: '55.942.312/0001-06 - Santander Brasil Consorcios', value: '55942312000106'},
    {label: '62.318.407/0001-19 - S3 DTVM', value: '62318407000119'},
    {label: '62.307.848/0001-15 - Banco RCI', value: '62307848000115'},
    {label: '62.474.093/0001-43 - Fundaçao Sudameris', value: '62474093000143'},
    {label: '62.588.793/0001-69 - Isban Brasil S/A', value: '62588793000169'},
    {label: '87.373.109/0001-06 - Zurich Santander Brasil Seguros e Previdencia S/A', value: '87373109000106'},
    {label: '90.400.888/0001-42 - Banco Santnader Brasil S/A', value: '90400888000142'},
    {label: '94.870.557/0001-27 - Produban Serviços de Informática', value: '94870557000127'},
  ]

  consult($event){
    this.hasValue = true
  }

  ngOnInit() {
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