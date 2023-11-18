# import all the necessary modules
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import get_news, get_top_headlines
from django.views import View

class NewsListView(ListAPIView):
     
     def get_queryset(self):
        return [] 
     
     def list(self, request, *args, **kwargs):
        try:

            query = self.request.GET.get("q", "")
            language = self.request.GET.get("language", "en")
            page = int(self.request.GET.get("page", ""))
            
            response = get_news(query, language, page)
            articles = response.get("articles", [])
            status = response.get("status", "")

            if status == 'ok' and articles:
                return Response(response.get("articles", []))
            
            if not articles and status == 'ok':
                return Response({"message": "Oops! It looks like we couldn't find any results."}, status=404)
            
        except Exception as e:
            
            return Response({"message": "Oops! It looks something went wrong."}, status=500)
    