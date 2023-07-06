import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import Swal from 'sweetalert2';
import { ProdutoService } from '../services/produtos/produto.service';

@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  produtos: any[] = [];
  produtoSelecionado:any;
  constructor(private modalService: NgbModal,
    public service: ProdutoService,
    public loadingService:LoadingService) {}

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", windowClass:"modalNgb" })
      .result.then();
  }

  editarModal(produtoSelecionado:any,content:any){
   this.produtoSelecionado = produtoSelecionado;
   this.open(content)
  }

  detalhesModal(produtoSelecionado:any,content:any){
   this.produtoSelecionado = produtoSelecionado;
   this.open(content)
  }

  ngOnInit() {
    this.buscar();
  }

  async buscar() {
    this.loadingService.show();
     this.service.buscar().subscribe((res:any) => {
      this.produtos = res
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

