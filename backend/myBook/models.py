# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Categories(models.Model):
    FAMILY = 'FM'
    FRIEND = 'FR'
    PARTNER = 'PT'
    PROFESSIONAL = 'PR'
    OTHER = 'OT'

    CATEGORY_CHOICES = (
        (FAMILY, 'Family'),
        (FRIEND, 'Friend'),
        (PARTNER, 'Partner'),
        (PROFESSIONAL, 'Professional'),
        (OTHER, 'Other')
    )
    category = models.CharField(max_length=2,
                                choices=CATEGORY_CHOICES,
                                default = OTHER)
    def __str__(self):
        return self.category

# Create your models here.
class PhoneBook(models.Model):
    firstName = models.CharField(max_length=500)
    lastName = models.CharField(max_length=500)
    phoneNumber = models.CharField(primary_key=True,
                                    max_length=10)
    category = models.ForeignKey('Categories')

    def __str__(self):
        return 'Name: ' + self.firstName + ' ' + self.lastName + '\n Number: ' + self.phoneNumber + '\n Category: ' + self.category.category;
