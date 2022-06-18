from django.urls import path

from . import views
app_name = "equipments"

urlpatterns = [
    path('', views.EquipmentListView.as_view(), name='equipment_list'),
    path('inventory/', views.EquipmentCountListView.as_view(), name='equipment_inventory_list'),
]
