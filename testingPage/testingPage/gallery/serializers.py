from rest_framework import serializers
from gallery.models import GalleryModel

class GallerySerializer(serializers.ModelSerializer):
    # referencing the gallery model and connecting the serializer to it
    class Meta:
        model = GalleryModel
        # only impoting all fields into the serlializer
        # for the moment, might ease the viewing of things like the
        # date which I just want to see
        field = '__all__'
