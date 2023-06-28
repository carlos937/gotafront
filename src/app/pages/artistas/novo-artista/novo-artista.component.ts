import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistaService } from '../../services/artistas/artista.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'novo-artista',
  templateUrl: './novo-artista.component.html',
  styleUrls: ['./novo-artista.component.scss'],
})
export class NovoArtistaComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    celular: new FormControl(''),
    atuacao: new FormControl(''),
  });
  @Output() novo = new EventEmitter();
  constructor(
    public modalService: NgbModal,
    public service: ArtistaService,
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
