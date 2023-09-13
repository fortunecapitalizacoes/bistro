import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MesaFormService {

  private apiUrl = 'http://localhost:8080/mesa';

  constructor(private http: HttpClient) { }

  incluirMesa(mesa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mesa);
  }
}
