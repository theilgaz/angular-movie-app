import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[] = [];
  movieLength:number;
  constructor(private readonly movieService:MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies():void{
    this.movieService.getMovies().subscribe(x => {
      this.movies = x.slice(0,5);
      this.movieLength = x.length;
    });
  }

}
