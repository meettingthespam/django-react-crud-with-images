from rest_framework import viewsets, permissions
from dossiers.serializers import DossierSerializer
from dossiers.models import DossiersModel

# Dossiers Viewset


# Only what the user posts will be viewable to the user
class DossierViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = DossierSerializer

    def get_queryset(self):
        return self.request.user.dossiersModel.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
