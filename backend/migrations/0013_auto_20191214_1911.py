# Generated by Django 3.0 on 2019-12-14 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_auto_20191214_1903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='body',
            field=models.TextField(),
        ),
    ]