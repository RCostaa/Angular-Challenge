import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service";
import { Movie } from "./movies.model";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {

  movies:Array<Movie>;
  favorites:Array<Movie>;
  comicName:String;

  movieIndex:number;
  movieFlag:boolean;
  favoritesFlag:boolean;

  constructor(private moviesServive:MoviesService) { }

  ngOnInit() {
    this.favorites = [];
    this.movieFlag = false;
    this.favoritesFlag = false;

    this.moviesServive.getMovies("").subscribe(
      movies => {
        if(movies) {
          this.movies = movies["data"].results;
        }
      },
      error => console.log(error)
    );

  }

  getMoviesFiltered(comicName:String) {
    if(comicName) {  
      const filter = `titleStartsWith=${comicName}&`;

      this.moviesServive.getMovies(filter).subscribe(
        movies => {
          if(movies) {
            this.movies = movies["data"].results;
          }
        },
        error => console.log(error)
      );
    }
    else {
      this.moviesServive.getMovies("").subscribe(
        movies => {
          if(movies) {
            this.movies = movies["data"].results;
          }
        },
        error => console.log(error)
      );
    }
  }

  getIndex(index:number) {
    this.movieIndex = index;
    this.movieFlag = true;
  }

  addToFavorites(movie:Movie) {
    if(!this.favorites.includes(movie)) {
      this.favorites.push(movie);
    }
  }

  showFavorites() {
    this.favoritesFlag = true;
    this.movieFlag = false;
  }
  
  hideFavorites() {
    this.favoritesFlag = false;
    this.movieFlag = false;

  }

}
