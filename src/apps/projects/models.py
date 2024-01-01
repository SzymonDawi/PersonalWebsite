import datetime

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models as django_models
from wagtail import blocks, fields, models
from wagtail.admin import panels
from wagtail.forms import forms
from wagtail.images import blocks as image_blocks

from src.apps.common import models as common_models

LOWER_YEAR_LIMIT = 2018


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


def current_year():
    return datetime.date.today().year


def max_value_current_year(value):
    return MaxValueValidator(current_year() + 1)(value)


def year_choices():
    return [(r, r) for r in range(LOWER_YEAR_LIMIT, datetime.datetime.today().year + 2)]


class ProjectPage(common_models.BasePage):
    list_view_image = django_models.ForeignKey(
        "common.CustomImage",
        null=True,
        on_delete=django_models.SET_NULL,
        related_name="project_list_view_image",
        help_text="The image that shows on the projects page",
    )
    list_view_title = django_models.CharField(max_length=255, null=True, blank=True)
    year = django_models.IntegerField(
        null=True,
        validators=[MinValueValidator(LOWER_YEAR_LIMIT), max_value_current_year],
    )

    hero_title = django_models.CharField(max_length=255, null=False)
    hero_description = django_models.TextField(null=False)
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
        panels.FieldPanel(
            "year", widget=forms.Select(choices=([(None, "----")] + year_choices()))
        ),
        panels.MultiFieldPanel(
            [
                panels.FieldPanel("list_view_image"),
                panels.FieldPanel("list_view_title"),
            ],
            heading="List Fields",
            classname="collapsible",
        ),
        panels.MultiFieldPanel(
            [
                panels.FieldPanel("hero_title"),
                panels.FieldPanel("hero_description"),
                panels.FieldPanel("hero_bullet_title"),
                panels.InlinePanel("projectpage_hero_bullet", label="bullets"),
                panels.FieldPanel("hero_image"),
            ],
            heading="Hero Fields",
            classname="collapsible",
        ),
        panels.FieldPanel("body"),
    ]

    parent_page_types = ["projects.ProjectIndexPage"]


class ProjectIndexPage(common_models.BasePage):
    content_panels = models.Page.content_panels + []

    parent_page_types = ["home.HomePage"]
