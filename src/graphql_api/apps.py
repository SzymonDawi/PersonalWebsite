from django.apps import AppConfig
from django.conf import settings
from django.utils.autoreload import autoreload_started


def watch_schema(sender, **kwargs):
    """Restart dev server on edit of the schema file

    See
    https://stackoverflow.com/questions/42907285/django-autoreload-add-watched-file"""
    sender.watch_dir(settings.BASE_DIR, "schema.grapql")


class GraphqlApiConfig(AppConfig):
    name = "graphql_api"

    def ready(self):
        autoreload_started.connect(watch_schema)
