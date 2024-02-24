from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import AppUser
from workout.serializers import WorkoutSerializer

class SignupSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]

class AppUserSerializer(ModelSerializer):
    workouts = WorkoutSerializer(many=True, read_only=True) ## Serializes Workout Objects for the workouts field in AppUser
    class Meta:
        model = AppUser
        fields = '__all__'