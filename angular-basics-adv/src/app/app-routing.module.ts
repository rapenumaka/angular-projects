import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpCommComponent } from './http-comm/http-comm.component';

const routes: Routes = [

  {
    component: AboutComponent,
    path: ''
  }, 
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: PersonComponent,
    path: 'person'
  },
  {
    component: UserComponent,
    path: 'user/:id'
  },
  {
    component: TdFormComponent,
    path: 'tform'
  },
  {
    component: ReactiveFormComponent,
    path: 'rform'
  },
  {
    component: HttpCommComponent,
    path: 'connect'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
