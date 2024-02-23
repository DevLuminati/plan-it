from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import AppUser

class SignupSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]

class AppUserSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = '__all__'