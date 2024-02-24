from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from AppUser.views import SignupView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/get-token', obtain_auth_token),
    path('api/v1/signup', SignupView.as_view()),
    path('api/v1/app-user', include('AppUser.urls')) # Used to get user info
]
