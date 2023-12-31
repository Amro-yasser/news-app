# import all the necessary modules
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import get_news, get_top_headlines
from django.views import View
from .models import Search
import datetime
import logging

class NewsListView(ListAPIView):
     
     def get_queryset(self):
        return [] 
     
     def list(self, request, *args, **kwargs):
        error_messages = [{
            "code": 404,
            "en":"Oops! It looks like we couldn't find any results.",
            "ar":"عفوا! لا يمكننا العثور على أي نتائج.",
        }, {
            "code": 500,
            "en":"Oops! It looks something went wrong.",
            "ar":"عفوا! يبدو أن خطأ ما قد حدث.",
        }]
        try:

            query = self.request.GET.get("q", "")
            language = self.request.GET.get("language", "en")
            page = int(self.request.GET.get("page", ""))
            category = self.request.GET.get("category", "")
            today = datetime.date.today()

            search = Search.objects.filter(query=query, language=language, page=page,category=category)

            if search.exists() and search.first().date == today:
                search = search.first()
                return Response(search.result)
            

            response = get_news(query=query,language=language,page=page) if \
                  not category else \
                      get_top_headlines(query=query,language=language,category=category,page=page)
            articles = response.get("articles", [])
            status = response.get("status", "")

            

            if status == 'ok' and articles:

                if search.exists() and search.first().date != today:
                    search = search.first()
                    search.date = today
                    search.result = articles
                    search.save()
                else:
                    Search.objects.create(query=query, language=language, page=page, result=articles, date=today)

                return Response(articles)
        
            if not articles and status == 'ok':
                # return response with message from error_message array

                return Response({"message": error_messages[0][language]}, status=404)
           
            
        except Exception as e:
            logging.error("An error occurred: %s", e, exc_info=True)
            return Response({"message": error_messages[1][language]}, status=500)
    