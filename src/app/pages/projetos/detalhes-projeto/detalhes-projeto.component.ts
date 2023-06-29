import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'detalhes-projeto',
  templateUrl: './detalhes-projeto.component.html',
  styleUrls: ['./detalhes-projeto.component.scss']
})
export class DetalhesProjetoComponent {
  @Input() itemSelecionado: any;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }
  close(){
    this.modalService.dismissAll();
  }
}

