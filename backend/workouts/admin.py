from django.contrib import admin

from .models import Workout, WorkoutEquipment


@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    pass


@admin.register(WorkoutEquipment)
class WorkoutEquipmentAdmin(admin.ModelAdmin):
    pass

