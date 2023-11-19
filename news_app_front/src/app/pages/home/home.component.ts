import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent {
  loading = false
  languages = [
      {label:$localize`English`,code:'en', path:'en-US'},
      { label:$localize`Arabic`, code:'ar', path:'ar-AE' },
    ]
  
  categories :string[] = [
    $localize`business`,
    $localize`entertainment`,
    $localize`health`,
    $localize`science`, 
    $localize`sports`, 
    $localize`technology`
  ]
  query: string = ''  
  selectedCategory: any = ''
  selectedLanguage: any = '' 
  articles: any[] = []
  page: number = 1
  noResults: boolean = false
  errorMessage:string = ''
  previousParams: any = {}

  constructor( 
    @Inject(LOCALE_ID) private locale: string,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
      ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languages.find((language)=> language.code == this.locale.split('-')[0])?.code
  }
  changeLanguage(event: any){
    let path = this.languages.find((language)=> language.code == event)?.path
    let url = this.router.createUrlTree([path])
    window.location.replace(url.toString())
  }

  getArticles(){
    this.loading = true

    let params: any = {
      q:this.query,
      language:this.locale.split('-')[0],
      page:this.page,
    }

    if(this.selectedCategory){
      params.category= this.selectedCategory
    }


    if(this.previousParams.q !== params.q || this.previousParams.category !== params.category){
      this.page = 1
      this.articles = []
    }

    this.newsService.retrieveObjects(params).subscribe({
      next: (response: any) => {
        this.previousParams !== params && this.page == 1 ? 
          this.articles = response : 
          this.articles = this.articles.concat(response)
        
      },
      error: (error: any) => {
        if(error.status == 404 && this.articles.length == 0 || error.status == 500){
          
          this.noResults = true
          this.errorMessage = error.error.message
          this.articles = []
        }
      }
    }).add(()=>{

      this.loading = false
      this.previousParams = params

    })
  }

  nextPage(){
    console.log('next page')
    this.page += 1
    this.getArticles()
  }
}
