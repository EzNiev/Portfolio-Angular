import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarexperienciaComponent } from './components/experiencia/editarexperiencia/editarexperiencia.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component: LoginComponent},
  {path:'**', component:Page404Component},
  {path: 'editarexperiencia', component: EditarexperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
