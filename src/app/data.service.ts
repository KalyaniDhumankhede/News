import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  country: any = 'in';
  fromDate: any;
  toDate: any;
  articles: any;

  constructor(private http: HttpClient, private datepipe: DatePipe) {}

  getNewsByCountry() {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=d2b6b347a3aa446489e7c7218cc5d904`
    );
  }
  getNewsbyDate() {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=apple&from=${this.fromDate}&to=${this.toDate}&sortBy=popularity&apiKey=d2b6b347a3aa446489e7c7218cc5d904`
    );
  }
}
