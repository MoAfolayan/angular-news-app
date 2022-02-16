import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from '../models/news';
import { newsConfig } from '../news-config';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient) { }

    getNews(newsSector: string): Observable<INews> {
        let url: string;

        switch (newsSector.toLowerCase()) {
            case 'topusheadlines':
                url = newsConfig.topUSHeadlines.url;
                break;
            case 'business':
                url = newsConfig.businessNews.url;
                break;
            case 'wallstreetjournal':
                url = newsConfig.wallStreetJournalNews.url;
                break;
            case 'tech':
                url = newsConfig.techNews.url;
                break;
            default:
                url = newsConfig.topUSHeadlines.url;
                break;
        }
        return this.http.get<INews>(`${url}`);
    }
}
