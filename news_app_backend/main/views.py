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

        query = self.request.GET.get("q", "")
        language = self.request.GET.get("language", "")

        
        response = get_news(query)
    
        if response.get('status') == 'ok':
            return Response(response.get("articles", []))
        else:
            return Response({"error": "Failed to fetch news"}, status=500)
    