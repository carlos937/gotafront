import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
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
      environment.backUrl + 'projeto',
      this.createHeader('application/json')
    );
  }

  public excluir(id:string,arquivar:boolean): Observable<any>  {
    return this.http.delete(
      environment.backUrl + 'projeto?id='+id+'&arquivar='+arquivar,
      this.createHeader('application/json')
    );
  }

  public novo(obj: any): Observable<any> {
    return this.http.post(
      environment.backUrl + 'projeto',
      obj,
      this.createHeader('application/json')
    );
  }

  public editar(obj: any): Observable<any> {
    return this.http.put(
      environment.backUrl + 'projeto',
      obj,
      this.createHeader('application/json')
    );
  }
}
