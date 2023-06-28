import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() logar =  new EventEmitter();
  dado:number = 6;
  constructor() { }

  ngOnInit() {
  }

  dadof(){
    this.dado =  (Math.floor(Math.random() * 6)+1);

  }

}
