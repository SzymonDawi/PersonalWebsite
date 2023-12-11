from django.db import models as django_models
from wagtail.admin import panels


class Link(django_models.Model):
    class IconTypeEnum(django_models.TextChoices):
        GITHUB = "GITHUB", "Github"
        LINKEDIN = "LINKEDIN", "LinkedIn"
        INSTAGRAM = "INSTAGRAM", "Instagram"

    label = django_models.CharField(max_length=255)
    url = django_models.URLField("Link", blank=False)
    icon_slug = django_models.CharField(
        choices=IconTypeEnum.choices,
        default=IconTypeEnum.GITHUB,
        db_index=True,
        max_length=255,
    )

    panel = [
        panels.FieldPanel("label"),
        panels.FieldPanel("url"),
        panels.FieldPanel("icon_slug"),
    ]

    def __str__(self):
        return self.label

    class Meta:
        verbose_name = "Link"
        verbose_name_plural = "Links"
