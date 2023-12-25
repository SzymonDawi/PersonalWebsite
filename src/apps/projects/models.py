from django.db import models as django_models
from wagtail import blocks, fields, models
from wagtail.admin import panels

from src.apps.common import models as common_models


class FigmaBlock(blocks.StructBlock):
    figma_url = blocks.CharBlock()


class ProjectPage(common_models.BasePage):
    hero_description = django_models.TextField(blank=True, null=False)
    hero_image = django_models.ForeignKey(
        "common.CustomImage",
        null=True,
        blank=True,
        on_delete=django_models.SET_NULL,
        related_name="project_hero_image",
        help_text="The background image for the projects hero",
    )

    body = fields.StreamField(
        [
            ("figma", FigmaBlock()),
        ],
        use_json_field=True,
        blank=True,
        null=True,
    )

    content_panels = models.Page.content_panels + [
        panels.FieldPanel("hero_description"),
        panels.FieldPanel("hero_image"),
        panels.FieldPanel("body"),
    ]

    parent_page_types = ["projects.ProjectIndexPage"]


class ProjectIndexPage(common_models.BasePage):
    content_panels = models.Page.content_panels + []

    parent_page_types = ["home.HomePage"]
