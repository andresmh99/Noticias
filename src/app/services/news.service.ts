import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces';

const url: string = environment.url;
const apikey: string = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(page:number){
    return this.http.get<NewsResponse>(`${url}/top-headlines`,
    {params:{
      country: 'us',
      category: 'business',
      apikey: apikey,
      page: page
    }});
  }
  getTopHeadLinesByCategories(page:number, category:string){
    return this.http.get<NewsResponse>(`${url}/top-headlines`,
    {params:{
      country: 'us',
      category: category,
      apikey: apikey,
      page: page
    }});
  }
}
