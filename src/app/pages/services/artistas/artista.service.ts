import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
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
      environment.backUrl + 'artista',
      this.createHeader('application/json')
    );
  }

  public excluir(id:string): Observable<any>  {
    return this.http.delete(
      environment.backUrl + 'artista?id='+id,
      this.createHeader('application/json')
    );
  }

  public novo(obj: any): Observable<any> {
    return this.http.post(
      environment.backUrl + 'artista',
      obj,
      this.createHeader('application/json')
    );
  }

  public editar(obj: any): Observable<any> {
    return this.http.put(
      environment.backUrl + 'artista',
      obj,
      this.createHeader('application/json')
    );
  }
}
