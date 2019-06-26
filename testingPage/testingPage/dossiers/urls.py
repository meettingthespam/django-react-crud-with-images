from rest_framework import routers
from dossiers.api import DossierViewSet


router = routers.DefaultRouter()
router.register('api/dossiers', DossierViewSet, 'dossiers')

urlpatterns = router.urls
