import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = environment.URL;
  apikey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<NewsResponse>(`${this.url}top-headlines?country=us&category=business&apiKey=${this.apikey}`);
  }
}
