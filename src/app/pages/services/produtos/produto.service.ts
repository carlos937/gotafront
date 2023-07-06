import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}
  private createHeader(contentType: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'      }),
    };
  }
  public buscar(): Observable<any>  {
    return this.http.get(
      environment.backUrl + 'produto',
      this.createHeader('application/json')
    );
  }

  public excluir(id:string,arquivar:boolean): Observable<any>  {
    return this.http.delete(
      environment.backUrl + 'produto?id='+id+'&arquivar='+arquivar,
      this.createHeader('application/json')
    );
  }

  public novo(obj: any): Observable<any> {
    return this.http.post(
      environment.backUrl + 'produto',
      obj,
      this.createHeader('application/json')
    );
  }

  public editar(obj: any): Observable<any> {
    return this.http.put(
      environment.backUrl + 'produto',
      obj,
      this.createHeader('application/json')
    );
  }
}

