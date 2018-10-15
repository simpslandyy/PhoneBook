from tastypie.resources import ModelResource
from tastypie import fields
from myBook.models import PhoneBook, Categories

class CategoriesResource(ModelResource):
    class Meta:
        queryset = Categories.objects.all()
        resource_name = 'Categories'

class PhoneBookResource(ModelResource):
    # Tells TastyPie that it maps to the category field of the PhoneBook model
    category = fields.ForeignKey(CategoriesResource, 'category')

    class Meta:
        queryset = PhoneBook.objects.all()
        resource_name = 'book'

        
