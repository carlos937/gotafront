import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ArtistaService } from "../services/artistas/artista.service";
import { LoadingService } from "src/app/shared/loading/loading.service";

@Component({
  selector: "artistas",
  templateUrl: "./artistas.component.html",
  styleUrls: ["./artistas.component.scss"],
})
export class ArtistasComponent implements OnInit {
  artistas: any[] = [];
  artistaSelecionado:any;
  constructor(private modalService: NgbModal,
    public service: ArtistaService,
    public loadingService:LoadingService) {}

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", windowClass:"modalNgb" })
      .result.then();
  }

  editar(artistaSelecionado:any,content:any){
   this.artistaSelecionado = artistaSelecionado;
   this.open(content)
  }

  detalhes(artistaSelecionado:any,content:any){
   this.artistaSelecionado = artistaSelecionado;
   this.open(content)
  }

  ngOnInit() {
    this.buscar();
  }

  async buscar() {
    this.loadingService.show();
     this.service.buscar().subscribe((res:any) => {
      this.artistas = res
      this.loadingService.hide();
    });
  }

  async excluir(id:any){
    this.loadingService.show();
    this.service.excluir(id).subscribe(res => {
      alert(res.mensagem);
      this.loadingService.hide();
      this.buscar();
    });
  }
}
