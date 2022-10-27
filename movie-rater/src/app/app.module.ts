import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { Routes,RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CookieService} from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatButtonModule} from '@angular/material/button';


const routes : Routes =[
  {path:'',pathMatch:'full',redirectTo:'auth'}
];



@NgModule({
  declarations: [
    AppComponent,
  
  ],
 

  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
    
    

  
    
  ],

exports:[RouterModule],


  providers: [CookieService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
