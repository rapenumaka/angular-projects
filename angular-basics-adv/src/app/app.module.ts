import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UserComponent } from './user/user.component';
import { TdFormComponent } from './td-form/td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpCommComponent } from './http-comm/http-comm.component';
import { HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PersonComponent,
    HomeComponent,
    BetterHighlightDirective,
    UserComponent,
    TdFormComponent,
    ReactiveFormComponent,
    HttpCommComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
