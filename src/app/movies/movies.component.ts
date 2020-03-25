import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
    selector: "movies",
    templateUrl: "movies.component.html",
    styleUrls: ["movies.component.css"]
})

export class MoviesComponent implements OnInit, OnDestroy {

    title = 'Quentin Tarantino Movies';
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService:MovieService) {
 
    }

    ngOnInit(): void {
        this.getMovies();
    }

    ngOnDestroy(): void {
      this.clearList();
    }

    onSelect(movie: Movie) {
        this.selectedMovie = movie;
    }

    ajax:any;

    clearList(){
        if (this.ajax) {
            this.ajax.unsubscribe();
        }
    }

    getMovies(){
        this.ajax = this.movieService.getMovies().subscribe(x=>this.movies=x); 
    }

}