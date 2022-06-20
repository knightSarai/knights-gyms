from django.urls import path

from . import views

app_name = "workouts"


urlpatterns = [
    path('', views.WorkoutListView.as_view(), name='all_workouts'),
    path('<int:pk>/', views.WorkoutDetailView.as_view(), name='workout_detail'),
]
