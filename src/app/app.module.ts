import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClientModule } from '@angular/common/http';
import { AuGuard } from './au.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [AuGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
