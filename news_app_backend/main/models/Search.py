from django.contrib.postgres.indexes import GinIndex
from django.db import models

class Search(models.Model):    

    class Meta:
        db_table = 'search'
        indexes = [
            GinIndex(fields=['query'], name="query_lower_gin", opclasses=['gin_trgm_ops'], ),
            models.Index(fields=['language','page','category']),
        ]

    language = models.CharField(max_length=255)
    query = models.TextField()
    page = models.IntegerField()
    date = models.DateField()
    category = models.CharField(max_length=255)
    result = models.JSONField()