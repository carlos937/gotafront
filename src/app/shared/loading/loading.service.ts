import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  audio = new Audio();

  active =  false;

  constructor() {
    this.audio.src = "../../../assets/decepcao_pos_punk.mp3";
    this.audio.loop = true;
  }

  show(){
    this.audio.play();
    this.active = true;
  }
  hide(){
    this.audio.pause();
    this.active = false;
  }
}
