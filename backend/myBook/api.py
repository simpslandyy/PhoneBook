from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from tastypie import fields
from tastypie.constants import ALL, ALL_WITH_RELATIONS
from myBook.models import Contacts, Categories

#
# class UsersResource(ModelResource):
#     class Meta:
#         queryset = Users.objects.all()
#         resource_name = 'users'
#         exclude = ['password']
#         filtering = {
#             'username': ALL,
#             'id': ALL
#         }

class CategoriesResource(ModelResource):
    class Meta:
        queryset = Categories.objects.all()
        resource_name = 'categories'
        allowed_methods = ['get']
        filtering = {
            'category': ALL
        }

class ContactsResource(ModelResource):
    # Tells TastyPie that it maps to the category field of the PhoneBook model
    category = fields.ForeignKey(CategoriesResource, 'category')
    # owner = fields.ForeignKey(UsersResource, 'owner')

    class Meta:
        queryset = Contacts.objects.all()
        authorization = Authorization()
        resource_name = 'contacts'
        filtering = {
            # 'owner': ALL_WITH_RELATIONS,
            'category': ALL_WITH_RELATIONS,
            'firstName': ['exact'],
            'lastName': ['exact']
        }
