import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public articles: Article[] = [];

  constructor(private service: NewsService) {}

  ngOnInit(){

    this.service.getTopHeadLines().subscribe(resp => {
      this.articles = resp.articles;
    })
  }

}
