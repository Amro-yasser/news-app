import os
from newsapi import NewsApiClient
import datetime
newsapi = NewsApiClient(api_key=os.getenv('API_KEY'))

def get_top_headlines(query,language,country,category):
    top_headlines = newsapi.get_top_headlines(q=query,
                                          category=category,
                                          language=language,
                                          country=country)
    return top_headlines

# /v2/everything
def get_news(query,language,from_param,sort_by):
    today = datetime.date.today()
    # convert today into str
    today = today.strftime("%Y-%m-%d")
    all_articles = newsapi.get_everything(q=query,
                                      from_param=from_param,
                                      to=today  ,
                                      language=language,
                                      sort_by=sort_by,
                                      )
    return all_articles


    
