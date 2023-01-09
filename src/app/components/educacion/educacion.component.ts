import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios: Estudios[]=[];

  constructor(private SEstudios: EstudiosService) { }

  ngOnInit(): void {
    this.cargarEstudios();
  }

  cargarEstudios():void{
    this.SEstudios.buscar().subscribe(data => {this.estudios=data});
  }
}
