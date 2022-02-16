import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news/services/news.service';
import { newsConfig } from '../news/news-config';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    config: any = newsConfig;
    keys: any;

    constructor(private newsService: NewsService) { }

    ngOnInit(): void {
        this.keys = Object.keys(this.config);
        this.getAllNews();
    }

    getAllNews() {
        this.newsService.getAllNews(this.config);
    }
}