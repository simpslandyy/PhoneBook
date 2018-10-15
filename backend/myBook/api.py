from tastypie.resources import ModelResource
from tastypie import fields
from myBook.models import Contacts, Categories, Users

class UsersResource(ModelResource):
    class Meta:
        queryset = Users.objects.all()
        resource_name = 'users'
        exclude = ['password']

class CategoriesResource(ModelResource):
    class Meta:
        queryset = Categories.objects.all()
        resource_name = 'categories'
        allowed_methods = ['get']

class ContactsResource(ModelResource):
    # Tells TastyPie that it maps to the category field of the PhoneBook model
    category = fields.ForeignKey(CategoriesResource, 'category')
    owner = fields.ForeignKey(UsersResource, 'owner')

    class Meta:
        queryset = Contacts.objects.all()
        resource_name = 'contacts'
