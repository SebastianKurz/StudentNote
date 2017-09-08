import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {ROUTE_CONFIG} from './app.routes';

import { Root } from './root.component';
import { PageNotFoundComponent } from './404.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent} from './login.component';
import { ClassesComponent } from './classes.component';
import { SchoolComponent } from './school.component';
import { StudentComponent } from './student.component';
import { TeacherComponent } from './teacher.component';

import { getSchoolService} from './service/get.service';
import { getClassService} from './service/get.service';
import { getStudentService} from './service/get.service';
import { getTeacherService} from './service/get.service';
import { getNoteService} from './service/get.service';


@NgModule({
  declarations: [
    Root,
    PageNotFoundComponent,
    NavbarComponent,
    ClassesComponent,
    SchoolComponent,
    StudentComponent,
    TeacherComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      ROUTE_CONFIG,
      { enableTracing: true }
    ),
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    getTeacherService,
    getSchoolService,
    getClassService,
    getStudentService,
    getNoteService
  ],
  bootstrap: [Root]
})
export class AppModule {
 }
