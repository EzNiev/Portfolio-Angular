import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BannerComponent } from './components/banner/banner.component';
import { ModalAboutmeComponent } from './modales/modal-aboutme/modal-aboutme/modal-aboutme.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion/modal-educacion.component';
import { ModalExperienciasComponent } from './modales/modal-experiencias/modal-experiencias/modal-experiencias.component';
import { ModalProyectsComponent } from './modales/modal-proyects/modal-proyects/modal-proyects.component';
import { ModalSkillsComponent } from './modales/modal-skills/modal-skills/modal-skills.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        EducacionComponent,
        ExperienciaComponent,
        SkillsComponent,
        IndexComponent,
        LoginComponent,
        LogoutComponent,
        NavbarComponent,
        Page404Component,
        ProyectsComponent,
        AboutMeComponent,
        BannerComponent,
        ModalAboutmeComponent,
        ModalEducacionComponent,
        ModalExperienciasComponent,
        ModalProyectsComponent,
        ModalSkillsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }
