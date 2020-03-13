# Generated by Django 3.0 on 2019-12-13 20:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_about_jobs'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='about',
            name='jobs',
        ),
        migrations.AddField(
            model_name='job',
            name='jobs',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='backend.About'),
        ),
    ]