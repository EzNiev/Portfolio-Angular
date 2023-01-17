import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Datoseze } from 'src/app/model/datoseze';
import { DatosezeService } from 'src/app/servicios/datoseze.service';

@Component({
  selector: 'app-modal-aboutme',
  templateUrl: './modal-aboutme.component.html',
  styleUrls: ['./modal-aboutme.component.css']
})
export class ModalAboutmeComponent implements OnInit {
  form: FormGroup;
  datoseze: Datoseze=any[];
  constructor(private formBuilder: FormBuilder,
    private SDatoseze: DatosezeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    //grupo de controles para el formulario
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      posicion: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
      github: ['', [Validators.required]],
      fotoperfil: ['', [Validators.required]],
      aboutme: ['', [Validators.required]],
      rutacv: ['', [Validators.required]],
      usuario_id: ['', [Validators.required]],
    })
    }
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.SDatoseze.ver(id).subscribe(data=>{this.datoseze=data;
      },err =>{
        alert("Error al cargar datos");
        this.router.navigate(['']);
      }
      )
    }
    
    //metodos GET
    get Nombre(){
      return this.form.get("nombre")
    }
    get Posicion(){
      return this.form.get("posicion")
    }
    get Edad(){
      return this.form.get("edad")
    }
    get Instagram(){
      return this.form.get("instagram")
    }
    get Linkedin(){
      return this.form.get("linkedin")
    }
    get Github(){
      return this.form.get("github")
    }
    get Fotoperfil(){
      return this.form.get("fotoperfil")
    }
    get Aboutme(){
      return this.form.get("aboutme")
    }
    get Rutacv(){
      return this.form.get("rutacv")
    }

    onUpdate():void{
      this.SDatoseze.editar(this.form.value).subscribe(data=>{
        alert("Datos de Ezequiel Modificados");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al cargar datos");
        this.router.navigate(['']);
      }
      )
    }

    onEnviar(event:Event){
      event.preventDefault;
      if(this.form.valid){
        alert("Se cargo la informacion correctamente!")
      }else{
        this.form.markAllAsTouched();
      }
    }
  }
