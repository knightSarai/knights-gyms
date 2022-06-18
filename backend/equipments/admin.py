from django.contrib import admin

from .models import Equipment




@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    pass

