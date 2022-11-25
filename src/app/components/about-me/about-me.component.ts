import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {
  posicion: string = '';
  aboutme: string = '';
  fotoperfil: any = [];

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.posicion = data.posicion;
      this.aboutme = data.aboutme;
      this.fotoperfil = data.fotoperfil;
    })
  }
}