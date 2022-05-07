from django.db import models


class Equipment(models.Model):
    name = models.CharField('Name', max_length=255, null=False) 
    amount = models.CharField('Amount', max_length=255, null=False) 
    

