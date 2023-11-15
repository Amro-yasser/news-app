# import all the necessary modules
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response, JsonResponse


class NewsListView(LIS):
     def list(self, request, *args, **kwargs):
        query = self.request.GET.get("q", "")
        language = self.request.GET.get("language", "")
        from_param = self.request.GET.get("from", "")
        sort_by = self.request.GET.get("sortBy", "")

        params = {
            "q": query,
            "language": language,
            "from": from_param,
            "sortBy": sort_by,
        }

        
        response = ''
        if response.status_code == 200:
            return Response(response.json().get("articles", []))
        else:
            return Response({"error": "Failed to fetch news"}, status=500)
    
class NewsDetailView(RetrieveAPIView):
    def retrieve(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        query = self.request.GET.get("q", "")
        language = self.request.GET.get("language", "en")
        from_param = self.request.GET.get("from", "7days")
        sort_by = self.request.GET.get("sortBy", "publishedAt")

        params = {
            "q": query,
            "language": language,
            "from": from_param,
            "sortBy": sort_by,
        }

        response = ''

        if response.status_code == 200:
            return Response(response.json())
        else:
            return Response({"error": "Failed to fetch news details"}, status=500)