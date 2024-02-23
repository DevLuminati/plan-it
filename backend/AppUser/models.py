from django.contrib.auth.models import User
from django.db import models


class AppUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    streak = models.IntegerField(default=0)
    score = models.IntegerField(default=0)