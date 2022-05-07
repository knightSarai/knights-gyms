from django.urls import path

from . import views

app_name = "workouts"


urlpatterns = [
    path('', views.WorkoutListView.as_view(), name='all_workouts'),
]
