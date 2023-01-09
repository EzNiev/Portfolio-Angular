import { Component, OnInit } from '@angular/core';
import { Datoseze } from 'src/app/model/datoseze';
import { DatosezeService } from 'src/app/servicios/datoseze.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ezequiel: Datoseze[]=[];
  constructor(private SDatoseze: DatosezeService) { }

  ngOnInit(): void {
    this.cargarDatoseze();
  }

  cargarDatoseze():void{
    this.SDatoseze.buscar().subscribe(data => {this.ezequiel=data});
  }
}