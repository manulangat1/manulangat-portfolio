# Generated by Django 3.0 on 2019-12-14 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20191213_2047'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('pic', models.ImageField(upload_to='articles/')),
                ('github', models.URLField()),
                ('proj_url', models.URLField()),
                ('description', models.TextField()),
            ],
        ),
    ]
