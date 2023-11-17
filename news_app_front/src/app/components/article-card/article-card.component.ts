import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() article: any;

  // function too open link in a new tab
  redFullArticle(link: string) {
    window.open(link, '_blank');
  }
}
