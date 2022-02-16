import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from '../models/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private topUSHeadlinesUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&from=2022-02-07&sortBy=popularity&apiKey=047211f713cf4eb09e845c9739c86aa9';
    private businessNewsUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&from=2022-02-07&sortBy=popularity&apiKey=047211f713cf4eb09e845c9739c86aa9';
    private wallStreetJournalNewsUrl: string = 'https://newsapi.org/v2/everything?domains=wsj.com&from=2022-02-07&sortBy=popularity&apiKey=047211f713cf4eb09e845c9739c86aa9';
    private techNewsUrl: string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&from=2022-02-07&sortBy=popularity&apiKey=047211f713cf4eb09e845c9739c86aa9';

    constructor(private http: HttpClient) { }

    getNews(newsSector: string): Observable<INews> {
        let url: string;

        switch (newsSector.toLowerCase()) {
            case 'topusheadlines':
                url = this.topUSHeadlinesUrl;
                break;
            case 'business':
                url = this.businessNewsUrl;
                break;
            case 'wallstreetjournal':
                url = this.wallStreetJournalNewsUrl;
                break;
            case 'tech':
                url = this.techNewsUrl;
                break;
            default:
                url = this.topUSHeadlinesUrl;
                break;
        }
        return this.http.get<INews>(`${url}`);
    }
}
