import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SobreService {
  constructor(private http: HttpClient) {}

  private createHeader(contentType: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
      }),
    };
  }

  public buscar(): Observable<any> {
    return this.http.get(
      environment.backUrl + 'sobre',
      this.createHeader('application/json')
    );
  }

  public editar(obj: any): Observable<any> {
    return this.http.put(
      environment.backUrl + 'sobre',
      obj,
      this.createHeader('application/json')
    );
  }
}
