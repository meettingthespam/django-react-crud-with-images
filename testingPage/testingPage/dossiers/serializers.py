from rest_framework import serializers
from dossiers.models import DossiersModel

# dossier Serializer
class DossierSerializer(serializers.ModelSerializer):
  class Meta:
    model = DossiersModel
    fields = '__all__'
