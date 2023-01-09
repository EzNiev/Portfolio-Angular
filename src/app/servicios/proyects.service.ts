import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService{
  url = "http://localhost:8080/proyects/"
  constructor(private httpClient: HttpClient) { }


  public buscar():Observable<Proyects[]> {
    return this.httpClient.get<Proyects[]>(this.url + 'lista');
  }

  public ver(id: number):Observable<Proyects> {
    return this.httpClient.get<Proyects>(this.url + `/ver/${id}`);
  }

  public crear(Proyects: Proyects): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', Proyects);
  }

  public editar(id:number): Observable<Proyects> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, Proyects);
  }

  public borrar(id: number):Observable<Proyects>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }

}