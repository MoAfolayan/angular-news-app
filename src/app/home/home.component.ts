import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../news/models/news';
import { NewsService } from '../news/services/news.service';
import { tap } from 'rxjs/operators';
import { newsConfig } from '../news/news-config';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    config: any = newsConfig;

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