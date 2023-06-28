import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'detalhes-artista',
  templateUrl: './detalhes-artista.component.html',
  styleUrls: ['./detalhes-artista.component.scss']
})
export class DetalhesArtistaComponent implements OnInit {
  @Input() artista: any;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }
  close(){
    this.modalService.dismissAll();
  }
}
