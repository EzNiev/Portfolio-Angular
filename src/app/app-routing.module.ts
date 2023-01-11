import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ModalAboutmeComponent } from './modales/modal-aboutme/modal-aboutme/modal-aboutme.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editAboutMe/:id', component: ModalAboutmeComponent},
  {path:'**', component:Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
