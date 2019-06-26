from django.db import models
from django.contrib.auth.models import User


class DossiersModel(models.Model):
    name = models.CharField(max_length=100)
    hobbies = models.CharField(max_length=100, blank=True)
    job = models.CharField(max_length=100, blank=True)
    appearance = models.CharField(max_length=100, blank=True)
    discussions = models.TextField(blank=True)
    owner = models.ForeignKey(
        User,
        related_name="dossiersModel",
        on_delete=models.CASCADE,
        null=True)
    added = models.DateTimeField(auto_now_add=True)
