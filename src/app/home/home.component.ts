import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  nextExpireDate: any
  lastExpireDate: any
  remainingDays: any
  
  calculateDates(){
    const tt = Date.now()
    const expireDate = new Date(tt);
    if(
      expireDate.getMonth() == 0 ||
      expireDate.getMonth() == 2 ||
      expireDate.getMonth() == 4 ||
      expireDate.getMonth() == 6 ||
      expireDate.getMonth() == 7 ||
      expireDate.getMonth() == 9 ||
      expireDate.getMonth() == 11
    ){
      this.remainingDays = 31 - expireDate.getDate() + 15
    }else if(expireDate.getMonth() == 1){
      this.remainingDays = 28 - expireDate.getDate() + 15
    }else{
      this.remainingDays = 30 - expireDate.getDate() + 15
    }

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
    this.router.navigate(['/home/painel-consulta'])
  }
}