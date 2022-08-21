import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = 'https://newsapi.org/v2/';
  apikey: string = '89b0df2490a7409c945ad027173f4dae';

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<NewsResponse>(`${this.url}top-headlines?country=us&category=business&apiKey=${this.apikey}`);
  }
}
