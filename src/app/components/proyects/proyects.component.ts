import { Component, OnInit } from '@angular/core';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/servicios/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})

export class ProyectsComponent implements OnInit{
  proyectos: Proyects[]=[];

  constructor(private SProyects: ProyectsService) { }

  ngOnInit(): void {
    this.cargarProyects();
  }

  cargarProyects():void{
    this.SProyects.buscar().subscribe(data => {this.proyectos=data});
  }
}

