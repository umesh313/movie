import { Component, Input, OnInit } from '@angular/core';
import { GetmoviesService } from '../services/getmovies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
moviesdata:any;
@Input() value:any;
  constructor(private movieServices: GetmoviesService) { }

  ngOnInit(): void 
  {
this.getList(this.value);
  }
  getList(id:any)
  {
    this.movieServices.getMovieList(id).subscribe((mydata: any)=>{
      this.moviesdata=mydata;
      console.log(this.moviesdata)
    })
  }
  getImageUrl(posterPath:any){
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }

}


