
import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from 'src/app/interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Share } from '@capacitor/share';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() index: number;

  constructor(
      private actionSheetCtrl:ActionSheetController,
      private iab: InAppBrowser,
      private storageService: StorageService) { }

  ngOnInit() {}

  openArticle(){
    const browser = this.iab.create(this.article.url);
    browser.show();
  }

  async openMenu(){
    const articleInFavorites = this.storageService.articleInFavorites(this.article);
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      mode: 'ios',
      buttons: [
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => {this.shareArticle()}
        },
        {
          text: articleInFavorites ? 'Remove' : 'Favorites',
          icon: articleInFavorites ? 'heart' : 'heart-outline',
          handler: () => {this.onToggleFavorite()}
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel'
        }
      ]
    });

  await actionSheet.present();
}

async shareArticle(){
  await Share.share({
    title: this.article.title,
    text: this.article.source.name,
    url: this.article.url
  })
}
onToggleFavorite(){

  this.storageService.saveOrRemoveArticle(this.article);

}

}
