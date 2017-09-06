import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {FilterPipe} from './filter.pipe';

import { AppComponent } from './app.component';
import { LoginComponent} from './login.component';
import { ContentHolderComponent } from './contentholder.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentHolderComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
