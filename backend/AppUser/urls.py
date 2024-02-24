from django.urls import path
from AppUser.views import AppUserView

urlpatterns = [
    path('', AppUserView.as_view(), name='app_user'),
]