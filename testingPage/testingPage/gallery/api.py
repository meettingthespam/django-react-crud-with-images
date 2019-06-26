from rest_framework import viewsets, permissions
from gallery.serializers import GallerySerializer

# https://www.django-rest-framework.org/api-guide/permissions/
# permissions could be Authenitcated OR Read Only
'''
but the issue would be since this is built with JWT we couldn't really be
having the authentication on the front end (since I'd rather have the backend,
but having it either or, it might be functional <- make it work and then make it pretty)
'''
class GalleryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = GallerySerializer

    # returning all of the gallery images
    # should this be specified just for one user?
    def get_queryset(self):
        return self.request.user.galleryModel.all()

    # does this need to be specified if user will be creating these from
    # the backend?
    def perform_create(self, serializer):
        serlizer.save(owner=self.request.user)
