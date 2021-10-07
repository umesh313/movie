import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [

  {
path:"",
component:MoviesComponent

  },
  {
path:"movies-list",
component:MoviesListComponent
  },
  {
path:"movies-details/:id",
component:MoviesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
