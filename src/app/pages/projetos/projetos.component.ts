import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProjetoService } from '../services/projetos/projeto.service';
import { ArtistaService } from '../services/artistas/artista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  projetos: any[] = [];
  itemSelecionado:any;
  artistas: any[] = [];
  constructor(private modalService: NgbModal,
    public service: ProjetoService,
    public serviceArtista: ArtistaService,
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

  async ngOnInit() {
    await this.buscar();
    await this.buscarArtistas();
  }

  async buscar() {
    this.loadingService.show();
     this.service.buscar().subscribe((res:any) => {
      this.projetos = res
      this.loadingService.hide();
    });
  }
  async buscarArtistas() {
    this.loadingService.show();
     this.serviceArtista.buscar().subscribe((res:any) => {
      this.artistas = res
      this.loadingService.hide();
    });
  }

  async excluir(id:any){
    Swal.fire({
      title: 'O que voce deseja fazer?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Arquivar',
      denyButtonText: `Deletar`,
    }).then((result) => {
       if (!result.dismiss){
        this.loadingService.show();
        this.service.excluir(id,result.isConfirmed).subscribe((res:any) => {
          alert(res.mensagem);
          this.loadingService.hide();
          this.buscar();
        });
       }
    })

  }
}

