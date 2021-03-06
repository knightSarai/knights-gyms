# Generated by Django 3.2.9 on 2022-06-18 15:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('base', '0001_initial'),
        ('equipments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('mastermodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.mastermodel')),
                ('details', models.TextField(verbose_name='Details')),
            ],
            bases=('base.mastermodel',),
        ),
        migrations.CreateModel(
            name='WorkoutEquipment',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='base.basemodel')),
                ('amount', models.CharField(max_length=255, verbose_name='Amount')),
                ('equipment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='workout_equipments', to='equipments.equipment')),
                ('workout', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='workout_equipments', to='workouts.workout')),
            ],
            bases=('base.basemodel',),
        ),
        migrations.AddField(
            model_name='workout',
            name='equipments',
            field=models.ManyToManyField(related_name='equipments', through='workouts.WorkoutEquipment', to='equipments.Equipment'),
        ),
    ]
