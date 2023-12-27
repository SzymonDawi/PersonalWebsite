from django.db import models as django_models
from wagtail import blocks, fields, models
from wagtail.admin import panels
from wagtail.images import blocks as image_blocks

from src.apps.common import models as common_models


class HeroBullets(models.Orderable):
    value = django_models.CharField(max_length=255, blank=True)
    page = models.ParentalKey(
        "ProjectPage",
        on_delete=django_models.CASCADE,
        related_name="projectpage_hero_bullet",
    )


class FigmaBlock(blocks.StructBlock):
    url = blocks.CharBlock()


class GithubBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    repo = blocks.CharBlock()
    owner = blocks.CharBlock()


class ParagraphBlock(blocks.StructBlock):
    title = blocks.CharBlock(blank=True, required=False)
    paragraph = blocks.TextBlock()
    image = image_blocks.ImageChooserBlock(blank=True, required=False)


class ProcessBlock(blocks.StreamBlock):
    title = blocks.CharBlock()
    paragraph = ParagraphBlock()
    image = image_blocks.ImageChooserBlock()


class ProjectPage(common_models.BasePage):
    hero_title = django_models.CharField(max_length=255, blank=True, null=False)
    hero_description = django_models.TextField(blank=True, null=False)
    hero_bullet_title = django_models.CharField(max_length=255, blank=True, null=False)
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
            ("process", ProcessBlock()),
            ("figma", FigmaBlock()),
            ("github", GithubBlock()),
        ],
        use_json_field=True,
        blank=True,
        null=True,
    )

    content_panels = models.Page.content_panels + [
        panels.FieldPanel("hero_title"),
        panels.FieldPanel("hero_description"),
        panels.FieldPanel("hero_bullet_title"),
        panels.InlinePanel("projectpage_hero_bullet", label="bullets"),
        panels.FieldPanel("hero_image"),
        panels.FieldPanel("body"),
    ]

    parent_page_types = ["projects.ProjectIndexPage"]


class ProjectIndexPage(common_models.BasePage):
    content_panels = models.Page.content_panels + []

    parent_page_types = ["home.HomePage"]
