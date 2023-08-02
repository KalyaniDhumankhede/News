import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css'],
})
export class NewslistComponent {
  News: any;
  term: any;
  open: boolean = false;
  selectionCheck: boolean = false;
  constructor(public service: DataService, private datepaipe: DatePipe) {}

  ngOnInit() {
    this.service.toDate = this.datepaipe.transform(
      Date.parse(new Date().toString()),
      'yyyy-MM-dd'
    );
    this.service.fromDate = new Date();
    this.service.fromDate.setDate(this.service.fromDate.getDate() - 2);
    this.service.fromDate = this.datepaipe.transform(
      Date.parse(this.service.fromDate.toString()),
      'yyyy-MM-dd'
    );

    this.getCountryData();
    this.getDataByDate();
  }

  getCountryData() {
    this.service.getNewsByCountry().subscribe((val: any) => {
      this.News = val.articles;
    });
  }
  getDataByDate() {
    this.service.getNewsbyDate().subscribe((val: any) => {
      this.service.articles = val.articles;
      this.service.articles = this.service.articles.concat(this.News);
    });
  }
  selectedValue(event: any) {
    this.service.country = event.target.value;
    return (this.selectionCheck = true);
  }
  FilterData() {
    if (this.selectionCheck) {
      this.getCountryData();
      this.service.articles = this.News;
    }

    this.getDataByDate();
    this.open = false;
  }
}
