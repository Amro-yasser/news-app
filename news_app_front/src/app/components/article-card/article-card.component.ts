import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() article: any;

  constructor(private datePipe: DatePipe) { }
  
  redirectToArticle(link: string) {
    window.open(link, '_blank');
  }

  get humanizeDate() {
    const date = new Date(this.article.publishedAt);
    return this.datePipe.transform(date, 'MMM dd, yyyy'); 
  }

  imageLoadError(event: any) {
    event.target.src = 'assets/images/img-failed.png';
  }
}
