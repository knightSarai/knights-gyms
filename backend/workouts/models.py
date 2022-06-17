from django.db import models


class Workout(models.Model):
    name = models.CharField('Name', max_length=255, null=False) 
    date = models.DateTimeField('Created at', auto_now_add=True, editable=False)
    updated_at = models.DateTimeField('Updated at', auto_now=True)
    details = models.TextField('Details')

    def __str__(self):
        return self.name

