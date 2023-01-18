import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { EditarexperienciaComponent } from './editarexperiencia/editarexperiencia.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencias: Experiencias[]=[];

  constructor(private SExperiencia: ExperienciasService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias():void{
    this.SExperiencia.buscar().subscribe(data => {this.experiencias=data});
  }

  openDialogEdit(id: any): void {
    const dialogRef = this.dialog.open(EditarexperienciaComponent, {
      width: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cargarExperiencias();
    });
  }

}
