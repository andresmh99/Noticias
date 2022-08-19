import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-TopNews',
  templateUrl: 'TopNews.page.html',
  styleUrls: ['TopNews.page.scss']
})
export class TopNewsPage implements OnInit{

  public articles: Article[] = [];

  constructor(private service: NewsService) {}

  ngOnInit(){

    this.service.getTopHeadLines().subscribe(resp => {
      this.articles = resp.articles;
    })
  }

}
