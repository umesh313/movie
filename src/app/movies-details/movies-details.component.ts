import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetmoviesService } from '../services/getmovies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
moviesdata:any;
id:any;
  constructor(private movieServices: GetmoviesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((para:ParamMap)=>{
      if(para.has("id"))
      {
     this.id=para.get("id")
     this.getMoviedetail(this.id);
      }
    })
    
    
  }

  getMoviedetail(id:any)
  {
    this.movieServices.getMoviedetails(id).subscribe((mydata: any)=>{
      this.moviesdata=mydata;
      console.log(this.moviesdata)
    })
  }
  getImageUrl(posterPath:any){
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }



}
