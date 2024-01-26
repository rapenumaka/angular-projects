import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { PortComponent } from './port/port.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { PersonComponent } from './person/person.component';
import { PersonDisplayComponent } from './person-display/person-display.component';
import { HeaderComponent } from './header/header.component';
import { PdfPrinterComponent } from './pdf-printer/pdf-printer.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path: '', component :PersonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PortComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    PersonComponent,
    PersonDisplayComponent,
    HeaderComponent,
    PdfPrinterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
