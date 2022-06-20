from django.db import models


class BaseModel(models.Model):
    created = models.DateTimeField('Created at', auto_now_add=True, editable=False)
    updated_at = models.DateTimeField('Updated at', auto_now=True)
    active = models.BooleanField('Active', default=True)

    def delete(self, *args, **kwargs):
        self.active = False
        self.save()


class MasterModel(BaseModel):
    name = models.CharField('Name', unique=True, max_length=255, null=False)

    def __str__(self):
        return self.name
