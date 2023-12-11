from wagtail.snippets.models import register_snippet

from src.apps.common import models

register_snippet(models.Link)
