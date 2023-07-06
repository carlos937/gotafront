import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProdutoService } from '../../services/produtos/produto.service';

@Component({
  selector: 'novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss']
})
export class NovoProdutoComponent {
  form = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl(''),
    descricao: new FormControl(''),
    valor : new FormControl(0),
    artistasId : new FormControl([])
  });

  @Input() artistas: any[]  = [];
  @Output() novo = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: ProdutoService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {}

  close() {
    this.modalService.dismissAll();
  }

  Enviar() {
    this.loadingService.show();
    this.service.novo(this.form.value).subscribe((res) => {
      alert(res.mensagem);
      this.loadingService.hide();
      this.close();
      this.novo.emit();
    });
  }
}
