from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='money_map_home'),
]

