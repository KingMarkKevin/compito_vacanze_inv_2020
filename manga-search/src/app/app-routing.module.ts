import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMangaComponent } from './search-manga/search-manga.component';

const routes: Routes = [
  { path: 'search', component: SearchMangaComponent },
  //{ path: 'artists/:id', component: MangaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
