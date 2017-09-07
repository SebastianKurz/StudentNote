import { Routes, RouterModule } from '@angular/router';

import { Root } from './root.component';
import { PageNotFoundComponent } from './404.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent} from './login.component';
import { ClassesComponent } from './classes.component';
import { SchoolComponent } from './school.component';
import { StudentComponent } from './student.component';
import { TeacherComponent } from './teacher.component';

export const ROUTE_CONFIG: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',component: ClassesComponent},
  { path: 'classes',component: ClassesComponent},
  { path: 'schools',component: SchoolComponent},
  { path: 'teachers',component: TeacherComponent},
  { path: 'students',component: StudentComponent},
  { path: 'student/:id',component: StudentComponent},



  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
