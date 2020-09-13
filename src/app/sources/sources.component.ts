import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  selected;
  news;
  sources= [
    {
      id: "bbc-news",
      name: "BBC News"
    },
    {
      id: "bbc-sport",
      name: "BBC Sport"
    },
    {
      id: "bild",
      name: "Bild"
    },
    {
      id: "blasting-news-br",
      name: "Blasting News (BR)"
    },
    {
      id: "bleacher-report",
      name: "Bleacher Report"
    },
    {
      id: "bloomberg",
      name: "Bloomberg"
    },
    {
      id: "breitbart-news",
      name: "Breitbart News"
    },
    {
      id: "business-insider",
      name: "Business Insider"
    }
  ]

  constructor(private newsService: NewsService) { }

  ngOnInit() {
   this.selected = this.sources[0].id;
   this.getData(this.selected);
  }

  onSourceChange(){
    this.getData(this.selected);
  }

  getData(selected){
    this.newsService.getData(`/top-headlines/?sources=${ selected }`).subscribe(data => {
      this.news = data;
    })
  }

}
