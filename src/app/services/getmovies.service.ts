import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movies } from '../Models/movies.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GetmoviesService {
  getData() {
    throw new Error('Method not implemented.');
  }
movies: Movies[]=[]; 
  constructor(private http:HttpClient ) { }

// getData()
// {
//   // return this.http.get<Movies>("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41").pipe(map((data:any)=>{data.genres}))
//   return this.http.get<Movies>("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41")
// }

getGenre() {
   return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41").pipe(map((data: any)=>data.genres)) }


getMovieList(id:any)
{
  return this.http.get("https://api.themoviedb.org/3/genre/"+id+"/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41").pipe(map((data: any)=>data.results)) }



getMoviedetails(id:any)
{
  return this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=68e82445c8842ba8616d0f6bf0e97a41")
}
}
