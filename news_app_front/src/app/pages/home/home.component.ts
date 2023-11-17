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
  page: number = 1
  constructor(
    private newsService: NewsService
    ) {}

  getArticles(){
    this.loading = true
    console.log('scrolling',this.page)

    let params = {
      q:this.query,
      language:this.selectedLanguage,
      page:this.page,
    }

    if(this.articles.length === 0 ){
      this.page = 1
    }

    this.newsService.retrieveObjects(params).subscribe((data:any)=>{
      if(this.articles.length === 0){
        this.articles = data

      }else{

        this.articles = this.articles.concat(data)
      }
    }).add(()=>{

      this.loading = false

    })
  }

  nextPage(){
    console.log('next page')
    this.page += 1
    this.getArticles()
  }
}
