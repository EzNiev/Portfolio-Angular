import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../model/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  url = "http://localhost:8080/experiencias/"
  constructor(private httpClient: HttpClient) { }


  public buscar():Observable<Experiencias[]> {
    return this.httpClient.get<Experiencias[]>(this.url + 'lista');
  }

  public ver(id: number):Observable<Experiencias> {
    return this.httpClient.get<Experiencias>(this.url + `/ver/${id}`);
  }

  public crear(experiencias: Experiencias): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', experiencias);
  }

  public editar(id:number): Observable<Experiencias> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, Experiencias);
  }

  public borrar(id: number):Observable<Experiencias>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }

}
