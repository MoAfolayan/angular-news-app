import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=047211f713cf4eb09e845c9739c86aa9';

  constructor(private http: HttpClient) { }

  getNews(): Observable<INews> {
    return this.http.get<INews>(`${this.newsUrl}`);
  }
}
