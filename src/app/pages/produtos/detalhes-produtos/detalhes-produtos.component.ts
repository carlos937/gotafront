import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'detalhes-produto',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.scss']
})
export class DetalhesProdutosComponent {
  @Input() itemSelecionado: any;
  @Input() artistas: any[] = [];
  artistasSelecionados: any[] = [];

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
    this.itemSelecionado.artistasId.map((aId:any) => {
      this.artistasSelecionados.push(this.artistas.find(a => a.id ==  aId));
    });
  }

  close(){
    this.modalService.dismissAll();
  }
}
