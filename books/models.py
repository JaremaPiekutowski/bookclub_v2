from django.conf import settings
from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=255)


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    genre = models.ForeignKey(
        Genre,
        null=True,
        on_delete=models.SET_NULL
        )
    added_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        on_delete=models.SET_NULL,
    )
    added_date = models.DateTimeField(auto_now_add=True)
    review = models.URLField(null=True)
