from rest_framework import routers
from notesToSelf.api import NotesToSelfViewSet

router = routers.DefaultRouter()
router.register('api/notestoself', NotesToSelfViewSet, 'notestoself' )

urlpatterns = router.urls
