import { Injectable } from '@angular/core';
//Suscribirse a los datos y que reciba repuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
//http = alias
  constructor(private http:HttpClient) { }

  //metodo Observable que devuelve datos
  getDatos():Observable<any>{
    //retorno de datos utilizando el metodo get en HttpClient que llama a la base de datos JSON o a una URL
    //Usamos el metodo get para obtener los datos del json, como para invocar los datos y poder usarlos
    return this.http.get('./assets/db/datos.json');
    //acá podría poner un callback para ver la opción de problema de conexión del servidor
  }
}
