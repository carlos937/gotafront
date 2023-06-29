import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProjetoService } from '../../services/projetos/projeto.service';

@Component({
  selector: 'novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.scss']
})
export class NovoProjetoComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('') ,
    descricao: new FormControl('')
  });
  @Output() novo = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: ProjetoService,
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

