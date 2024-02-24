from django.contrib.auth.models import User
from django.db import models
from workout.models import Workout

class AppUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    streak = models.IntegerField(default=0)
    score = models.IntegerField(default=0)
    workouts = models.ManyToManyField(Workout, related_name='workouts', blank=True, default=None)