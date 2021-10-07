import { Component, OnInit } from '@angular/core';
import { Movies } from '../Models/movies.model';
import { GetmoviesService } from '../services/getmovies.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {



moviesdata:any;
  constructor(private movieServices: GetmoviesService) { }

  ngOnInit()
  {
   
    this.getmovie();
    
  }


getmovie()
{
  this.movieServices.getGenre().subscribe((mydata: any)=>{
    this.moviesdata=mydata;
    console.log(this.moviesdata)
  })
}

}



