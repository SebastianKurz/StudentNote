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

import { GlobalSchool } from './service/local.service';
import { GlobalStatus } from './service/local.service';
import { GlobalLogin } from './service/local.service';
import { Global } from './service/local.service';

import { postSchoolService} from './service/post.service';
import { postClassService} from './service/post.service';
import { postStudentService} from './service/post.service';
import { postTeacherService} from './service/post.service';
import { postNoteService} from './service/post.service';

import { getSchoolService} from './service/get.service';
import { getClassService} from './service/get.service';
import { getStudentService} from './service/get.service';
import { getTeacherService} from './service/get.service';
import { getNoteService} from './service/get.service';

import { updateSchoolService} from './service/update.service';
import { updateClassService} from './service/update.service';
import { updateStudentService} from './service/update.service';
import { updateTeacherService} from './service/update.service';
import { updateNoteService} from './service/update.service';

import { deleteSchoolService} from './service/delete.service';
import { deleteClassService} from './service/delete.service';
import { deleteStudentService} from './service/delete.service';
import { deleteTeacherService} from './service/delete.service';
import { deleteNoteService} from './service/delete.service';


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
    GlobalSchool,
    GlobalStatus,
    GlobalLogin,
    Global,

    postTeacherService,
    postSchoolService,
    postClassService,
    postStudentService,
    postNoteService,

    getTeacherService,
    getSchoolService,
    getClassService,
    getStudentService,
    getNoteService,

    updateTeacherService,
    updateSchoolService,
    updateClassService,
    updateStudentService,
    updateNoteService,

    deleteTeacherService,
    deleteSchoolService,
    deleteClassService,
    deleteStudentService,
    deleteNoteService,
  ],
  bootstrap: [Root]
})
export class AppModule {
 }
