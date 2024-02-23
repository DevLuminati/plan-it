from django.db import models

# Create your models here.
class Goal(models.Model):
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    is_completed = models.BooleanField()