import { Component, OnInit } from '@angular/core';
import { MangaService } from '../manga.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-manga',
  templateUrl: './search-manga.component.html',
  styleUrls: ['./search-manga.component.css']
})
export class SearchMangaComponent {
  query: string;
  title = 'MML';
  obsTrack : Observable<Object>;
  results: any;
  constructor(public manga : MangaService) { }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.manga.searchManga(this.query);
    this.obsTrack.subscribe((data) => this.results = data);
  }


}
