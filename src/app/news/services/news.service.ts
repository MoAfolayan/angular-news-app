import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from '../models/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(private http: HttpClient) { }

    getAllNews(newsConfig: any) {
        Object.keys(newsConfig).forEach(element => {
            newsConfig[element].observable = this.http.get<INews>(`${newsConfig[element].url}`)
        });
    }
}
