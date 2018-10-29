import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  limitDate: string = "15/09/2018"
  ngOnInit() {
    this.router.navigate(['/home/eventos-pendentes'])
  }
}