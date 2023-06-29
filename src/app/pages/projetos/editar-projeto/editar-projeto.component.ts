import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProjetoService } from '../../services/projetos/projeto.service';

@Component({
  selector: 'editar-projeto',
  templateUrl: './editar-projeto.component.html',
  styleUrls: ['./editar-projeto.component.scss']
})
export class EditarProjetoComponent {
  @Input() itemSelecionado: any;
  form: any;
  @Output() editado = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: ProjetoService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.itemSelecionado.id),
      nome: new FormControl(this.itemSelecionado.nome),
      descricao: new FormControl(this.itemSelecionado.descricao),
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

