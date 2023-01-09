import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencias: Experiencias[]=[];

  constructor(private SExperiencia: ExperienciasService) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias():void{
    this.SExperiencia.buscar().subscribe(data => {this.experiencias=data});
  }
}
