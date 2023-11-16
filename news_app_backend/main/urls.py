from django.urls import path
from main.views import *
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth.decorators import login_required



urlpatterns = [

    
    #api
    path('api/news', NewsListView.as_view(), name='news_list'),


    


]
urlpatterns.extend(static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))