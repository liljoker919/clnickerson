from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("post/<int:pk>/", views.post_detail, name="post_detail"),
    path("travel/", views.travel, name="travel"),
    path("cooking/", views.cooking, name="cooking"),
]
