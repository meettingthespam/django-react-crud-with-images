from rest_framework import viewsets, permissions
from notesToSelf.serializers import NotesToSelfSerializer
from notesToSelf.models import NotesToSelfModel

# Notes Viewset

# Only allow what the user posts to be visible to what they post
class NotesToSelfViewSet(viewsets.ModelViewSet):
    # have to be logged in to see anything
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = NotesToSelfSerializer

    # returning everything just the user created
    def get_queryset(self):
        return self.request.user.notesToSelfModel.all()

    # setting the serializer to whoever the "owner" of the note is
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
