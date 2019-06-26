from rest_framework import routers
from gallery.api import GalleryViewSet


# using the default router atm, might be better to have custom,
# but check back on this.
router = routers.DefaultRouter()
router.register('api/gallery', GalleryViewSet, 'gallery')

urlpatterns = router.urls
