from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/workouts/', include('workouts.urls')),
    path('api/equipments/', include('equipments.urls'))
]
