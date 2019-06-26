from django.db import models
from django.contrib.auth.models import User


class NotesToSelfModel(models.Model):
    title = models.CharField(max_length=100, blank=True)
    body = models.TextField()
    author = models.ForeignKey(User, related_name="notesToSelfModel",
                            on_delete=models.CASCADE, null=True)
    added = models.DateTimeField(auto_now_add=True)
