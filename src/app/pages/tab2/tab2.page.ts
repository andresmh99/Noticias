import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll:IonInfiniteScroll

  public articles: Article[] = [];
  page: number = 1;
  categories: string[]=['business','entertainment', 'general','healths','cience','sports','technology'];
  selectedCategory: string = "";

  constructor(private service: NewsService) {}

  ngOnInit(){

    this.selectedCategory = this.categories[0];

    this.service.getTopHeadLines(this.page).subscribe(resp => {
      this.articles = resp.articles;
    })
  }
  segmentChanged(event:any){

    this.infiniteScroll.disabled = false;
    this.page = 1;
    this.selectedCategory = event.detail.value;

    this.service.getTopHeadLinesByCategories(this.page, this.selectedCategory).subscribe(resp => {
      this.articles = resp.articles;
    })

  }

  loadData(event:any){
    this.page +=1;
    this.service.getTopHeadLinesByCategories(this.page, this.selectedCategory).subscribe(resp => {
      if(resp.articles.length === 0){
        this.infiniteScroll.disabled = true;
      }
      this.articles = [...this.articles, ...resp.articles];
      this.infiniteScroll.complete();
    })
  }


}
