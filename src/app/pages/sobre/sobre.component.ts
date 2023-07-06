import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import Swal from 'sweetalert2';
import { ProdutoService } from '../services/produtos/produto.service';
import { SobreService } from '../services/sobre/sobre.service';

@Component({
  selector: 'sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  sobre: any;
  constructor(private modalService: NgbModal,
    public service: SobreService,
    public loadingService:LoadingService) {}

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", windowClass:"modalNgb" })
      .result.then();
  }

  ngOnInit() {
    this.buscar();
  }

  async buscar() {
    this.loadingService.show();
     this.service.buscar().subscribe((res:any) => {
      this.sobre = res;
      this.loadingService.hide();
    });
  }
}


