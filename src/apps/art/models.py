import datetime

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models as django_models
from wagtail import models
from wagtail.admin import panels
from wagtail.forms import forms

from src.apps.common import models as common_models

LOWER_YEAR_LIMIT = 2018


def current_year():
    return datetime.date.today().year


def max_value_current_year(value):
    return MaxValueValidator(current_year() + 1)(value)


def year_choices():
    return [(r, r) for r in range(LOWER_YEAR_LIMIT, datetime.datetime.today().year + 2)]


class ArtPage(common_models.BasePage):
    year = django_models.IntegerField(
        null=True,
        validators=[MinValueValidator(LOWER_YEAR_LIMIT), max_value_current_year],
    )
    image = django_models.ForeignKey(
        "common.CustomImage",
        null=True,
        on_delete=django_models.SET_NULL,
        related_name="art_image",
        help_text="",
    )

    content_panels = models.Page.content_panels + [
        panels.FieldPanel(
            "year", widget=forms.Select(choices=([(None, "----")] + year_choices()))
        ),
        panels.FieldPanel("image"),
    ]

    parent_page_types = ["art.ArtIndexPage"]


class ArtIndexPage(common_models.BasePage):
    content_panels = models.Page.content_panels + []

    parent_page_types = ["home.HomePage"]
