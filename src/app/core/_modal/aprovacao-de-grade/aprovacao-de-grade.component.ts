import { Component, OnInit, Input } from '@angular/core';
import { DadosService } from '../../../core/_service/dados.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-aprovacao-de-grade',
  templateUrl: './aprovacao-de-grade.component.html',
  styleUrls: ['./aprovacao-de-grade.component.css']
})
export class AprovacaoDeGradeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private dadosService: DadosService) { }
  
  ngOnInit() {
    console.log('Abri o Modal!!!');
  }


}
