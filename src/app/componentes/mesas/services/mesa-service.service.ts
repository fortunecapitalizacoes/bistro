import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MesaServiceService {
  private apiUrl = 'http://localhost:8080/mesa';

  constructor(private http: HttpClient) { }

  getMesas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  apagarMesa(mesa: string): Observable<any> {
    return this.http.delete<void>(this.apiUrl+"/"+mesa);
  }
}
