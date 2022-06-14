import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagCloudModule } from 'angular-tag-cloud-module';
//import { RoundProgressModule } from 'angular-svg-round-progressbar';


import { FooterComponent } from './components/footer/footer.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { BotonComponent } from './components/boton/boton.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { EduCardComponent } from './components/edu-card/edu-card.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';

import { AddJobComponent } from './components/add-job/add-job.component';
import { JobCardComponent } from './components/job-card/job-card.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';

import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EduFlyerComponent } from './pages/edu-flyer/edu-flyer.component';
import { JobsFlyerComponent } from './pages/jobs-flyer/jobs-flyer.component';
import { LoginComponent } from './pages/login/login.component';
import { EditarComponent } from './pages/editar/editar.component';
import { SkillFlyerComponent } from './pages/skill-flyer/skill-flyer.component';
import { AboutCardComponent } from './components/about-card/about-card.component';

import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AddEduComponent } from './components/add-edu/add-edu.component';
import { AddProjectComponent } from './components/add-project/add-project.component';


import { registerLocaleData } from '@angular/common';

import myLocaleEs from '@angular/common/locales/es';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { EditarLandingComponent } from './pages/editar-landing/editar-landing.component';
import { EditPersonaComponent } from './pages/edit-persona/edit-persona.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { ModalConfirmDialogComponent } from './components/modal-confirm-dialog/modal-confirm-dialog.component';
import { ConfirmService } from './services/confirm.service';
import { ConfirmState } from './class/confirm-state';
import { FormJobComponent } from './components/form-job/form-job.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';

registerLocaleData(myLocaleEs);

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    TopnavbarComponent,
    InicioComponent,
    
    ErrorComponent,
    BotonComponent,
    SkillCardComponent,


    AboutComponent,
    ProyectosComponent,
    ProjCardComponent,
    EduCardComponent,
      
    EduFlyerComponent,
    JobsFlyerComponent,
    ContactoFormComponent,
    LoginComponent,

    AddJobComponent,
    EditarComponent,
    JobCardComponent,
    SkillFlyerComponent,
    AboutCardComponent,

    AddSkillComponent,
    AddEduComponent,
    AddProjectComponent,

    BaseCardComponent,
    EditarLandingComponent,
    EditPersonaComponent,
    SpinnerComponent,
    ConfirmDirective,
    ModalConfirmDialogComponent,
    FormJobComponent,
    EditJobComponent,
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
  entryComponents: [
    ModalConfirmDialogComponent
  ],
  providers: [
    ConfirmService, 
    ConfirmState    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
