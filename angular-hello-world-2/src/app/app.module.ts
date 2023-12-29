import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { UserChildComponent } from './user-child/user-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserDataComponent,
    UserItemComponent,
    UserParentComponent,
    UserChildComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
