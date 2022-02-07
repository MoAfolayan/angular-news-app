import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() news$: Observable<INews> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  openNewsLink(url: string) {
    window.open(url);
  }
}
