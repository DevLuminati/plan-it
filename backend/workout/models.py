from django.db import models

# Create your models here.


class Workout(models.Model):
    date_added = models.DateField()
    workout_type = models.CharField(max_length=100)
    workout_details = models.TextField()
    # workout_proof = models.FileField(upload_to='workout_proofs/')

    def __str__(self):
        return f"{self.date_added} - {self.workout_type}"
    
