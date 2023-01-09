import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost:8080/usuarios/"
  constructor(private httpClient: HttpClient) { }


  public buscar():Observable<Usuarios[]> {
    return this.httpClient.get<Usuarios[]>(this.url + 'lista');
  }

  public ver(id: number):Observable<Usuarios> {
    return this.httpClient.get<Usuarios>(this.url + `/ver/${id}`);
  }

  public crear(Usuarios: Usuarios): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', Usuarios);
  }

  public editar(id:number): Observable<Usuarios> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, Usuarios);
  }

  public borrar(id: number):Observable<Usuarios>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }

}