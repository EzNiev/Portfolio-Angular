import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  
  //Traigo de datosservice (que a su ves trae toda la base de datos) todo(any) lo que tenga en el array en la seccion de trabajo
  //Entonces para hacer esto instancio la variable trabajos(forma de referirme al array de trabajos) y despues me sirve para usarla para trabajar con esos datos
  experienciasa: any =[];
  
  //armo el constructor, creo el alias y traigo las cosas
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experienciasa = data.experiencias;
    })
  }
}
