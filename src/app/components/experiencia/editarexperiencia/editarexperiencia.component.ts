import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Experiencias } from 'src/app/model/experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})

export class EditarexperienciaComponent implements OnInit {
  
  experiencia : Experiencias = new Experiencias( 0, "", "", "", "", "", "", "", "", "", 0)
  
  constructor(
    private service: ExperienciasService,
    public dialogRef: MatDialogRef<EditarexperienciaComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.service.ver(this.data.id).subscribe(data => {
      this.experiencia = data;
    }, err => {
      this.snackbar.open(`Error al cargar experiencia: ${err.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }
  
  onUpdate(id: any): void {
    this.service.editar(id, this.experiencia).subscribe(data => {
      this.dialogRef.close();
      this.snackbar.open('Experiencia actualizada', 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    }, error => {
      this.snackbar.open(`Error al actualizar experiencia: ${error.error.mensaje}`, 'Cerrar', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
