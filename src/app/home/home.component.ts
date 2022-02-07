import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../news/news';
import { NewsService } from '../news/news.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topUSHeadlines$: Observable<INews> | undefined;
  businessNews$: Observable<INews> | undefined;
  wallStreetJournalNews$: Observable<INews> | undefined;
  techNews$: Observable<INews> | undefined;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.topUSHeadlines$ = this.getNews('topusheadlines');
    this.businessNews$ = this.getNews('business');
    this.wallStreetJournalNews$ = this.getNews('wallStreetJournal');
    this.techNews$ = this.getNews('tech');
  }

  getNews(newsSector: string) {
    return this.newsService.getNews(newsSector)
      .pipe(
        tap(console.log)
      );
  }
}