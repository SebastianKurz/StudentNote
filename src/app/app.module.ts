import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {FilterPipe} from './filter.pipe';

import {ROUTE_CONFIG} from './app.routes';

import { Root } from './root.component';
import { PageNotFoundComponent } from './404.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent} from './login.component';
import { ClassesComponent } from './classes.component';
import { SchoolComponent } from './school.component';
import { StudentComponent } from './student.component';
import { TeacherComponent } from './teacher.component';



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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      ROUTE_CONFIG,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [Root]
})
export class AppModule {
 }
