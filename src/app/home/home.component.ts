import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  news: any;
  newsSubscription;
  length;
  pageSize = 8;
  page = 1;

  constructor(private newsService: NewsService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  onFavorite(article) {

    let items = []
    const val = localStorage.getItem('items')

    if (val != null) {
      items = JSON.parse(val)
    }

    items.push(article)
    localStorage.setItem('items', JSON.stringify(items))

    this.snackbar.open('Favorite added', 'ok', {
      duration: 3000
    })
  }

  getData() {
    this.newsSubscription = this.newsService.getData(`/top-headlines?country=in&pageSize=${this.pageSize}&page=${this.page}`).subscribe(data => {
      this.news = data;
      this.length = data['totalResults'];
    });
  }

  onPageChange(event) {
    this.newsSubscription = this.newsService.getData(`/top-headlines?country=in&pageSize=${this.pageSize}&page=${event.pageIndex + 1}`).subscribe(data => {
      this.news = data;
      this.length = data['totalResults'];
    });
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }

}
