import { Component, OnInit, Input } from '@angular/core';
import { DadosService } from '../../../core/_service/dados.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



declare var $: any;
@Component({
  selector: 'app-transmissao',
  templateUrl: './transmissao.component.html',
  styleUrls: ['./transmissao.component.css']
})
export class TransmissaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }

  @Input() contribuintePainelControle: any;
  
    ngOnInit() {
      console.log('valor: '+this.contribuintePainelControle)
    }

  




}
