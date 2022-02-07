import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private businessNewsUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=047211f713cf4eb09e845c9739c86aa9';
  private wallStreetJournalNewsUrl: string = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=047211f713cf4eb09e845c9739c86aa9';
  private techNewsUrl: string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=047211f713cf4eb09e845c9739c86aa9';

  constructor(private http: HttpClient) { }

  getNews(newsSector: string): Observable<INews> {
    let url: string;

    switch (newsSector.toLowerCase()) {
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
        url = this.businessNewsUrl;
        break;
    }
    return this.http.get<INews>(`${url}`);
  }
}
