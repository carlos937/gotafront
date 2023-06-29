import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProjetoService } from '../services/projetos/projeto.service';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  projetos: any[] = [];
  itemSelecionado:any;
  constructor(private modalService: NgbModal,
    public service: ProjetoService,
    public loadingService:LoadingService) {}

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", windowClass:"modalNgb" })
      .result.then();
  }

  editar(itemSelecionado:any,content:any){
   this.itemSelecionado = itemSelecionado;
   this.open(content)
  }

  detalhes(itemSelecionado:any,content:any){
   this.itemSelecionado = itemSelecionado;
   this.open(content)
  }

  ngOnInit() {
    this.buscar();
  }

  async buscar() {
    this.loadingService.show();
     this.service.buscar().subscribe((res:any) => {
      this.projetos = res
      this.loadingService.hide();
    });
  }

  async excluir(id:any){
    this.loadingService.show();
    this.service.excluir(id).subscribe((res:any) => {
      alert(res.mensagem);
      this.loadingService.hide();
      this.buscar();
    });
  }
}

