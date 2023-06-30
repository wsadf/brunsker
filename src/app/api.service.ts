import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovel } from './formulario-imovel/imovel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://run.mocky.io/v3/8f53f97c-689c-4118-95c4-56c4a71f898b';

  constructor(private http: HttpClient) {}

  getImoveis(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImovel(id: number): Observable<Imovel> {
    return this.http.get<Imovel>(`${this.apiUrl}/${id}`);
  }

  criarImovel(imovel: Imovel): Observable<Imovel> {
    return this.http.post<Imovel>(this.apiUrl, imovel);
  }

  atualizarImovel(id: number, imovel: Imovel): Observable<Imovel> {
    return this.http.put<Imovel>(`${this.apiUrl}/${id}`, imovel);
  }

  excluirImovel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
