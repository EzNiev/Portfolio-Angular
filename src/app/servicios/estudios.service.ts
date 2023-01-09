import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  url = "http://localhost:8080/estudios/"
  constructor(private httpClient: HttpClient) { }

  public buscar():Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.url + 'lista');
  }

  public ver(id: number):Observable<Estudios> {
    return this.httpClient.get<Estudios>(this.url + `/ver/${id}`);
  }

  public crear(Estudios: Estudios): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', Estudios);
  }

  public editar(id:number): Observable<Estudios> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, Estudios);
  }

  public borrar(id: number):Observable<Estudios>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }

}
