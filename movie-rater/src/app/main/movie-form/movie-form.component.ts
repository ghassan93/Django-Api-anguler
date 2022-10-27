import { ApiService } from 'src/app/api.service';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';



@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieForm:any;
  id:any;


@Output() movieCreated = new EventEmitter<Movie>();
@Output() movieUpdate= new EventEmitter<Movie>();

@Input() set movie(val:Movie){
  this.id=val.id;
  console.log(this.id);
  
  this.movieForm= new FormGroup({
    title:new FormControl(val.title),
    description:new FormControl(val.description)
  });



}; 




  constructor(
    private ApiService:ApiService
  ) { }

  ngOnInit(): void {
  }

  formDisabled(){
    if(this.movieForm.value.title.length &&
      this.movieForm.value.description.length) {
        return false;

    }else {
      return true;
    }
  }
  saveForm(){
    
    if(this.id){
      this.ApiService.updateMovie(
        this.id,
        this.movieForm.value.title,
        this.movieForm.value.description).subscribe(
          (result:any) =>this.movieUpdate.emit(result),
          error =>console.log(error),
  
          
        )

    }else{
      this.ApiService.createMovie(
        this.movieForm.value.title,
        this.movieForm.value.description).subscribe(
          (result:any) =>this.movieCreated.emit(result),
          error =>console.log(error),
    
        )
    }
    
  }

 
}
