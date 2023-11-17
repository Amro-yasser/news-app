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
def get_news(query,language='en',page=1):
    today = datetime.date.today()
    seven_days_before = today - datetime.timedelta(days=7)

    today = today.strftime("%Y-%m-%d")
    seven_days_before = seven_days_before.strftime("%Y-%m-%d")

    all_articles = newsapi.get_everything(q=query,
                                      from_param=seven_days_before,
                                      to=today  ,
                                      language=language,
                                      sort_by='publishedAt',
                                      page=page
                                      )
    return all_articles


    
