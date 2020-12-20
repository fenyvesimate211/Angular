import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginlistComponent } from './loginlist/loginlist.component';
import { EditloginComponent } from './editlogin/editlogin.component';
import { ViewloginComponent } from './viewlogin/viewlogin.component';
import {HttpClientModule} from '@angular/common/http';
import { AddloginComponent } from './addlogin/addlogin.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginlistComponent,
    EditloginComponent,
    ViewloginComponent,
    AddloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
