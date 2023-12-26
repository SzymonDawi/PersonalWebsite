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


class HomePage(common_models.BasePage):
    greeting = django_models.CharField(max_length=255, default="Hello!")
    description = django_models.TextField(blank=True, null=False)
    image = django_models.ForeignKey(
        "common.CustomImage",
        null=True,
        blank=True,
        on_delete=django_models.SET_NULL,
        related_name="home_page_image",
        help_text="The image shown on the home page",
    )

    content_panels = models.Page.content_panels + [
        panels.FieldPanel("image"),
        panels.FieldPanel("greeting"),
        panels.FieldPanel("description"),
        panels.InlinePanel("homepage_link", label="Links", min_num=1),
    ]

    parent_page_types = []
