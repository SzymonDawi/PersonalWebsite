from django.db import models as django_models
from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel
from wagtail import models
from wagtail.admin import panels

from src.apps.common import models as common_models


class Job(ClusterableModel, models.Orderable):
    employer = django_models.CharField(max_length=255, blank=True)
    page = ParentalKey(
        "AboutMePage",
        on_delete=django_models.CASCADE,
        related_name="aboutmepage_job",
    )

    panels = [
        panels.FieldPanel("employer"),
        panels.InlinePanel("aboutmepage_job_role", label="Roles"),
    ]


class Role(ClusterableModel, models.Orderable):
    job_title = django_models.CharField(max_length=255, blank=True)
    work_period = django_models.CharField(max_length=255, blank=True)
    experience = ParentalKey(
        Job,
        on_delete=django_models.CASCADE,
        related_name="aboutmepage_job_role",
    )

    panels = [
        panels.FieldPanel("job_title"),
        panels.FieldPanel("work_period"),
    ]


class AboutMePage(common_models.BasePage):
    image = django_models.ForeignKey(
        "common.CustomImage",
        null=True,
        on_delete=django_models.SET_NULL,
        related_name="about_me_image",
        help_text="", 
    )

    content_panels = models.Page.content_panels + [
        panels.FieldPanel("image"),
        panels.InlinePanel("aboutmepage_job"),
    ]

    parent_page_types = ["home.HomePage"]
