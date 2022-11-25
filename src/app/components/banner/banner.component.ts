import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  //Dato simpre string de la base de datos
  posicion: string = '';
  //Dato simpre string de la base de datos
  nombre: string = '';
  
  //armo el constructor, creo el alias y traigo las cosas
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.posicion = data.posicion;
      this.nombre = data.nombre;
    })
  }
}
