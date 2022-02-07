import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from './news/news';
import { NewsService } from './news/news.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news$: Observable<INews> | undefined;

  constructor(private newsService: NewsService,) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.news$ = this.newsService.getNews()
      .pipe(
        tap(console.log)
      );
  }
}