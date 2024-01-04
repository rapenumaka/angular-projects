import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
// this is a root module
// info about all the modules and angular libraries

// ngmodule- is a decorator modifies the behaviour of class

@NgModule({
  // Any components, directives and pipes should be registered in declarations
  declarations: [
    AppComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
