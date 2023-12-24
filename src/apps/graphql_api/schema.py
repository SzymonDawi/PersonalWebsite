import ariadne
import graphql

from src.apps.common import models as common_models
from src.apps.home.models import HomePage

query = ariadne.QueryType()

external_link = ariadne.ObjectType("ExternalLink")
image = ariadne.ObjectType("Image")

home = ariadne.ObjectType("Home")


@query.field("home")
def resolve_home(source, info: graphql.GraphQLResolveInfo, *_):
    return HomePage.get_page_preview_from_request_or_live(info.context["request"])


@home.field("links")
def resolve_home_links(obj: HomePage, *_):
    links = []

    for link in obj.homepage_link.all().select_related("link_item"):
        links.append(link)

    return links


@external_link.field("label")
def resolve_label(obj, *_):
    return obj.link_item.label


@external_link.field("url")
def resolve_url(obj, *_):
    return obj.link_item.url


@external_link.field("icon_slug")
def resolve_icon_slug(obj, *_):
    return obj.link_item.icon_slug


@image.field("rendition")
def resolve_image_rendition(obj: common_models.CustomImage, *_, **kwargs):
    print("test--------------------------------")
    # assume that all kwargs are rendition parameters
    filters = "|".join([f"{key}-{val}" for key, val in kwargs.items()])
    print(filters)
    rendition = obj.get_rendition(filters)
    return rendition


schema = ariadne.make_executable_schema(
    ariadne.load_schema_from_path("schema.graphql"),
    query,
    external_link,
    image,
    home,
)
