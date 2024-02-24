# workout/serializers.py
from rest_framework import serializers
from .models import Workout
## This gets used in App User to show us Workout data for the list of workouts on AppUser
class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'
