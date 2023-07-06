import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProdutoService } from '../../services/produtos/produto.service';

@Component({
  selector: 'editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent {
  @Input() itemSelecionado: any;
  @Input() artistas: any[]  = [];
  form: any;
  @Output() editado = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: ProdutoService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.form = new FormGroup(
    {
      id: new FormControl(this.itemSelecionado.id),
      titulo: new FormControl(this.itemSelecionado.titulo),
      descricao: new FormControl(this.itemSelecionado.descricao),
      valor : new FormControl(this.itemSelecionado.valor),
      artistasId : new FormControl(this.itemSelecionado.artistasId? this.itemSelecionado.artistasId : [])
    });
  }

  close() {
    this.modalService.dismissAll();
  }

  Enviar() {
    this.loadingService.show();
    this.service.editar(this.form.value).subscribe((res) => {
      alert(res.mensagem);
      this.loadingService.hide();
      this.close();
      this.editado.emit();
    });
  }
}

