import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes,RouterModule } from '@angular/router';

import { MovieLestComponent } from './movie-lest/movie-lest.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


import { ApiService } from '../api.service';

const routes : Routes =[
  {path:'movies',component: MainComponent}
];


@NgModule({
  declarations: [
    MainComponent,
    MovieLestComponent,
    MovieDetailsComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    MatButtonModule

   
    
    
    
    
  ],
  exports:[
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers:[
    ApiService
  ]
})
export class MainModule { }
