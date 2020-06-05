import { Component, OnInit } from '@angular/core';
import { Noticia } from './../../models/noticia';
import { NewsService } from './../../service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Noticia;
  listNews: Array<Noticia>;

  constructor(private _newsService:NewsService) {
    this.news = new Noticia();
    this.listNews = new Array<Noticia>();
    this.loadNews("soccer");
   }

  loadNews(category:string){
    this._newsService.getNews(category).subscribe(
      (result) => {
        this.listNews = result['arts'];
      }
    )
  }

  traslate(){
    alert("aqui");
    this._newsService.translateText("Hello world");
  }
  ngOnInit(): void {
  }
}