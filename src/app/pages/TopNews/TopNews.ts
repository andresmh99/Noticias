import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from '../../interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-TopNews',
  templateUrl: 'TopNews.page.html',
  styleUrls: ['TopNews.page.scss']
})
export class TopNewsPage implements OnInit{

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll:IonInfiniteScroll

  public articles: Article[] = [];
  page: number = 1;

  constructor(private service: NewsService) {}

  ngOnInit(){

    this.service.getTopHeadLines(this.page).subscribe(resp => {
      this.articles = resp.articles;
    })
  }

  loadData(event:any){
    this.page +=1;
    this.service.getTopHeadLines(this.page).subscribe(resp => {
      if(resp.articles.length === 0){
        this.infiniteScroll.disabled = true;
      }
      this.articles = [...this.articles, ...resp.articles];
      this.infiniteScroll.complete();
    })
  }
}
