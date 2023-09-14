import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesa } from '../models/Mesa';
@Injectable({
  providedIn: 'root'
})
export class MesaFormService {

  private apiUrl = 'http://localhost:8080/mesa';

  constructor(private http: HttpClient) { }

  incluirMesa(mesa: Mesa): Observable<Mesa> {
    return this.http.post<any>(this.apiUrl, mesa);
  }

}
