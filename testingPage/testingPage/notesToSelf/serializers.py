from rest_framework import serializers
from notesToSelf.models import NotesToSelfModel

# notesToSelf Serielaizer
class NotesToSelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotesToSelfModel
        fields = '__all__'
