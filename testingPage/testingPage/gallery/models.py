from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

from PIL import Image

# only needed for specific slugs
from django.urls import reverse


class GalleryModel(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)
    image = models.ImageField(upload_to="gallery_images")

    date_original = models.DateTimeField(default=timezone.now)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, related_name="galleryModel", on_delete=models.CASCADE)


    # returning the object as a string for easier viewing
    def __str__(self):
        return f'{self.title}, {self.description}, {self.image}'

    # overriding the default image save, for image quality and rendering speed
    def save(self):
        # referencing the Django save function
        super().save()

        img = Image.open(self.image.path)

        if img.height > 800 or img.width > 800:
            output_size = (800, 800)
            img.thumbnail(output_size)
            img.save(self.image.path)
