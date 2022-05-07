from rest_framework import generics 
# from rest_framework.response import Response

from .models import Workout
from .serializers import WorkoutSerializer


class WorkoutListView(generics.ListCreateAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

