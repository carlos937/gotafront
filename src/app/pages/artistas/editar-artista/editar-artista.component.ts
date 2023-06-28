import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ArtistaService } from '../../services/artistas/artista.service';

@Component({
  selector: 'editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls: ['./editar-artista.component.scss'],
})
export class EditarArtistaComponent implements OnInit {
  @Input() artista: any;
  form: any;
  @Output() editado = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: ArtistaService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.artista.id),
      nome: new FormControl(this.artista.nome),
      celular: new FormControl(this.artista.celular),
      atuacao: new FormControl(this.artista.atuacao),
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
