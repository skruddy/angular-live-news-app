import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';
import { FavoritesModule } from './favorites/favorites.module';
import { HeadlinesModule } from './headlines/headlines.module';

const routes: Routes = [
  {       
    path : '',
    component : HomeComponent
  },
  {
    path : 'sources',
    component : SourcesComponent
  },
  {
    path : 'headlines',
    loadChildren: './headlines/headlines.module#HeadlinesModule'
  },
  {
    path : 'favorites',
    loadChildren: './favorites/favorites.module#FavoritesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
