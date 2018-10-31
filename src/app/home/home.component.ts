import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../core/_service/dados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dadosService: DadosService) { }
  limitDate: string = "15/09/2018"
  nextExpireDate: any
  lastExpireDate: any
  
  calculateDates(){
    const tt = Date.now()
    const expireDate = new Date(tt);
    if(expireDate.getDate() > 15){
      const mmN = expireDate.getMonth() + 2;
      const mmP = expireDate.getMonth() + 1;
      const y = expireDate.getFullYear();
      this.nextExpireDate = '15/' + mmN + '/' + y;
      this.lastExpireDate = '15/' + mmP + '/' + y;
    }else{
      const mmN = expireDate.getMonth() + 1;
      const mmP = expireDate.getMonth();
      const y = expireDate.getFullYear();
      this.nextExpireDate = '15/' + mmN + '/' + y;
      this.lastExpireDate = '15/' + mmP + '/' + y;
    }
  }
  ngOnInit() {
    this.calculateDates()
    console.log(JSON.parse(localStorage.getItem('datesObj')))
    // this.router.navigate(['/home/painel-de-controle'])
    this.router.navigate(['/home/painel-consulta'])
  }
}