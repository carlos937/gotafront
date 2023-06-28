import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  audio = new Audio();
  constructor() { }

  ngOnInit() {
    this.audio.src = "../../../assets/bemVindo.mp3";
    this.audio.play();
  }


  inicio(){
    this.audio.src = "../../../assets/inicio.mp3";
    this.audio.play();

  }
  artistas(){
    this.audio.src = "../../../assets/artistas.mp3";
    this.audio.play();
  }
  projetos(){
    this.audio.src = "../../../assets/projetos.mp3";
    this.audio.play();
  }
}
