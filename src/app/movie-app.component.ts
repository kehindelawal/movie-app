import { Component } from '@angular/core';
import { MovieService } from './movie-service';
import { IMovies, IMovieResults } from './movie-interface';

@Component({
  moduleId: module.id,
  selector: 'movie-app-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css'],
  providers: [MovieService]
})

export class MovieAppComponent {
  title: string = 'Moviepedia';
}
