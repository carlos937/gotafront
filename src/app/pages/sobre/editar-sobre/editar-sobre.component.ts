import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProdutoService } from '../../services/produtos/produto.service';
import { SobreService } from '../../services/sobre/sobre.service';

@Component({
  selector: 'editar-sobre',
  templateUrl: './editar-sobre.component.html',
  styleUrls: ['./editar-sobre.component.scss']
})
export class EditarSobreComponent {
  @Input() itemSelecionado: any;
  form: any;
  @Output() editado = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: SobreService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.form = new FormGroup(
    {
      id: new FormControl(this.itemSelecionado.id),
      descricao: new FormControl(this.itemSelecionado.descricao)
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

