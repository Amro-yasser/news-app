import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent {
  loading: boolean = false
  languages: { label: string; code: string }[] = [
      {label:'English',code:'en'},
      { label:'Arabic', code:'ar'}
    ]
  
  themes :string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science', 
    'sports', 
    'technology'
  ]
  query: string = ''  
  selectedTheme: any = ''
  selectedLanguage: any = '' 
  articles: any[] = []

  constructor(
    private newsService: NewsService
    ) {}

  onsubmit(){
    this.loading = true
    let params = {
      q:this.query,
      language:this.selectedLanguage
    }
    console.log(params)
    this.newsService.retrieveObjects(params).subscribe((data:any)=>{
      this.articles = data
      console.log(this.articles)
      this.loading = false
    })
  }
}
