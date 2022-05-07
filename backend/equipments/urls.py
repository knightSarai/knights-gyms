from django.urls import path

from . import views
app_name = "equipments"

urlpatterns = [
    path('', views.EquipmentListView.as_view(), name='all_views'),
]
