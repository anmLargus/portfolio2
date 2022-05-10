import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { BotonComponent } from './components/boton/boton.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { EduCardComponent } from './components/edu-card/edu-card.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { SkillCloudComponent } from './components/skill-cloud/skill-cloud.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';
import { SkillsListComponent } from './pages/skills-list/skills-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EduFlyerComponent } from './pages/edu-flyer/edu-flyer.component';
import { JobsFlyerComponent } from './pages/jobs-flyer/jobs-flyer.component';
import { LoginComponent } from './pages/login/login.component';
import { EditarComponent } from './pages/editar/editar.component';
import { SkillFlyerComponent } from './pages/skill-flyer/skill-flyer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopnavbarComponent,
    InicioComponent,
    
    ErrorComponent,
    BotonComponent,
    SkillCardComponent,
    SkillsListComponent,

    AboutComponent,
    ProyectosComponent,
    ProjCardComponent,
    EduCardComponent,
      
    EduFlyerComponent,
    JobsFlyerComponent,
    ContactoFormComponent,
    LoginComponent,
    LoginFormComponent,
    AddJobComponent,
    EditarComponent,
    JobCardComponent,
    SkillCloudComponent,
    SkillFlyerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    TagCloudModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
