import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datoseze } from '../model/datoseze';

@Injectable({
  providedIn: 'root'
})
export class DatosezeService {
  url = "http://localhost:8080/datoseze/"
  constructor(private httpClient: HttpClient) { }

  public buscar():Observable<Datoseze[]> {
    return this.httpClient.get<Datoseze[]>(this.url + 'lista');
  }

  public ver(id: number):Observable<Datoseze> {
    return this.httpClient.get<Datoseze>(this.url + `/ver/${id}`);
  }

  public crear(datoseze: Datoseze): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', datoseze);
  }

  public editar(datoseze: Datoseze): Observable<Datoseze> {
    return this.httpClient.post<any>(this.url + 'crear', datoseze);
  }
  public editarid(id:number): Observable<Datoseze> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, Datoseze);
  }

  public borrar(id: number):Observable<Datoseze>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }

}
