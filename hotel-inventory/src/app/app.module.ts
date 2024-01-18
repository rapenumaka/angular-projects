import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./rooms/header/header.component";
// this is a root module
// info about all the modules and angular libraries

// ngmodule- is a decorator modifies the behaviour of class

@NgModule({
    // Any components, directives and pipes should be registered in declarations
    declarations: [
        AppComponent,
        RoomsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        CommonModule,
        RoomsListComponent,
        HeaderComponent
    ]
})
export class AppModule { }
