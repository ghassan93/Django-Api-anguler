import { Movie } from 'src/app/models/Movie';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  movies:any=[];
  selectedMovie=null;
  editedMovie:any;

  constructor(
    private apiservice:ApiService,
    private cookieService: CookieService,
    private router:Router
    ) { }

  ngOnInit(): void {
    // to check if the user authenticated
    const mrToken=this.cookieService.get('mr-token');
    console.log(mrToken);
    if(!mrToken){
      this.router.navigate(['/auth'])
    }else{
      
        this.apiservice.getMovies().subscribe(
      data => 
      
      {
        this.movies = data;
        console.log('data', data);

      },
      error => console.log(error)
    );

    }

  }

  logout(){
    this.cookieService.delete('mr-token');
    this.router.navigate(['/auth'])
  }


  selectMovie(movie:any){ 
    this.selectedMovie=movie;
    this.editedMovie=null;
    
  }

  editMovie(movie:any){
    this.editedMovie=movie;
    this.selectedMovie=null;
    
  }


  createNewMovie(){
    this.editedMovie={title:'',description:''};
    this.selectedMovie=null;

  }

  deletedMovie(movie:any){
    this.apiservice.deleteMovie(movie.id).subscribe(
      data =>{
        //refresh the list auto after deleteMovie
        this.movies=this.movies.filter((mov:any) =>mov.id !== movie.id)
      },
      error => console.log(error)
    );

  }
//refresh the list of movies auto when Created
  movieCreated(movie:Movie){
    this.movies.push(movie);
    this.editedMovie=null
  }




  movieUpdate(movie:Movie){
    const indx = this.movies.findIndex( (mov:any) => mov.id ===  movie.id);
  
    if (indx >=0){
      this.movies[indx] = movie

    }
    this.editedMovie=null
  }


 
}
