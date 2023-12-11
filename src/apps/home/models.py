from django.db import models as django_models
from wagtail import models
from wagtail.admin import panels

from src.apps.common import models as common_models


class Link(models.Orderable):
    link_item = django_models.ForeignKey(
        common_models.Link, null=True, blank=False, on_delete=django_models.CASCADE
    )
    page = models.ParentalKey(
        "HomePage", on_delete=django_models.CASCADE, related_name="homepage_link"
    )


class HomePage(models.Page):
    greating = django_models.CharField(max_length=255, default="Hello!")
    description = django_models.TextField(blank=True, null=False)

    content_panels = models.Page.content_panels + [
        panels.FieldPanel("greating"),
        panels.FieldPanel("description"),
        panels.InlinePanel("homepage_link", label="Links", min_num=1),
    ]
