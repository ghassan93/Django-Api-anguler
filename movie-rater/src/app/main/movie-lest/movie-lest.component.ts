import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movie-lest',
  templateUrl: './movie-lest.component.html',
  styleUrls: ['./movie-lest.component.css']
})
export class MovieLestComponent implements OnInit {
 
 @Input() movies:any=[];
 @Output() selectMovie=new EventEmitter();
 @Output() editedMovie=new EventEmitter();
 @Output() createNewMovie=new EventEmitter();
 @Output() deletedMovie=new EventEmitter();
  constructor(
    
  ) { }

  ngOnInit() {}

  movieClicked(movie:any){
    this.selectMovie.emit(movie);
    console.log(movie)
  }



  editMovie(movie:any){
    this.editedMovie.emit(movie);
    console.log(movie)
  }

  newMovie(){
    this.createNewMovie.emit();

  }

  
  deleteMovie(movie:any){
    this.deletedMovie.emit(movie);

  }

}
