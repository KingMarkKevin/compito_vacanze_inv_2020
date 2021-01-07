import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }

  searchManga(query:string){
    const url = `https://api.jikan.moe/v3/search/manga?q=${query}`
    const headers = new HttpHeaders("Content-Type");
    let obsManga = this.http.get(url, { headers });
    return obsManga;
  }
}
