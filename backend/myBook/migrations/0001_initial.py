# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-28 18:49
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('FM', 'Family'), ('FR', 'Friend'), ('PT', 'Partner'), ('PR', 'Professional'), ('OT', 'Other')], default='OT', max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='PhoneBook',
            fields=[
                ('firstName', models.CharField(max_length=500)),
                ('lastName', models.CharField(max_length=500)),
                ('phoneNumber', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myBook.Categories')),
            ],
        ),
    ]