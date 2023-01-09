import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = "http://localhost:8080/skills/"
  constructor(private httpClient: HttpClient) { }

  public buscar():Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.url + 'lista');
  }

  public ver(id: number):Observable<Skills> {
    return this.httpClient.get<Skills>(this.url + `/ver/${id}`);
  }

  public crear(skills: Skills): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', skills);
  }

  public editar(id:number): Observable<Skills> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, Skills);
  }

  public borrar(id: number):Observable<Skills>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }

}
