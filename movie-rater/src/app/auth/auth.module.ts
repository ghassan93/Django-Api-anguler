import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


const routes : Routes =[
  {path: 'auth', component: AuthComponent},

];

@NgModule({
  declarations: [
    AuthComponent
  ],
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    
    
  ],
  exports:[
    RouterModule
  ]
})
export class AuthModule { }
