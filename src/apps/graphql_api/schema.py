import ariadne
import graphql

from src.apps.about_me.models import AboutMePage
from src.apps.art.models import ArtPage
from src.apps.common import models as common_models
from src.apps.home.models import HomePage
from src.apps.projects.models import ProjectPage

from src.settings import base as setings

query = ariadne.QueryType()

external_link = ariadne.ObjectType("ExternalLink")
image = ariadne.ObjectType("Image")

project_stream_block = ariadne.UnionType("ProjectStreamBlock")
process_block_item = ariadne.UnionType("ProcessBlockItem")

home = ariadne.ObjectType("Home")
project = ariadne.ObjectType("Project")
figma_block = ariadne.ObjectType("FigmaBlock")
github_block = ariadne.ObjectType("GithubBlock")
process_block = ariadne.ObjectType("ProcessBlock")
process_paragraph = ariadne.ObjectType("ProcessParagraph")
process_title = ariadne.ObjectType("ProcessTitle")
process_image = ariadne.ObjectType("ProcessImage")
art = ariadne.ObjectType("Art")
about_me = ariadne.ObjectType("AboutMe")
job = ariadne.ObjectType("Job")
role = ariadne.ObjectType("Role")


@query.field("home")
def resolve_home(source, info: graphql.GraphQLResolveInfo, *_):
    return HomePage.get_page_preview_from_request_or_live(info.context["request"])


@query.field("projects")
def resolve_projects(source, info: graphql.GraphQLResolveInfo, *_):
    return ProjectPage.objects.live()


@query.field("project")
def resolve_project(source, info: graphql.GraphQLResolveInfo, *_, slug):
    return ProjectPage.objects.live().filter(slug=slug).first()


@query.field("art")
def resolve_art(source, info: graphql.GraphQLResolveInfo, *_):
    return ArtPage.objects.live()


@query.field("about_me")
def resolve_about_me(source, info: graphql.GraphQLResolveInfo, *_):
    return AboutMePage.objects.live().first()


@about_me.field("jobs")
def resolve_about_me_jobs(obj, *_):
    return obj.aboutmepage_job.all()


@job.field("roles")
def resolve_about_me_job_roles(obj, *_):
    return obj.aboutmepage_job_role.all()


@role.field("achievements")
def resolve_about_me_role_achievements(obj, *_):
    return [
        achievement.achievement
        for achievement in obj.aboutmepage_job_role_achievement.all()
    ]


@home.field("links")
def resolve_home_links(obj: HomePage, *_):
    links = []

    for link in obj.homepage_link.all().select_related("link_item"):
        links.append(link)

    return links


@external_link.field("label")
def resolve_link_label(obj, *_):
    return obj.link_item.label


@external_link.field("url")
def resolve_link_url(obj, *_):
    return obj.link_item.url


@external_link.field("icon_slug")
def resolve_icon_slug(obj, *_):
    return obj.link_item.icon_slug


@project.field("hero_bullets")
def resolve_project_bullets(obj, *_):
    bullets = []

    for bullet in obj.projectpage_hero_bullet.all():
        bullets.append(bullet.value)

    return bullets


@project.field("list_view_title")
def resolve_project_list_view_title(obj, *_):
    return obj.list_view_title or obj.title


@project.field("body")
def resolve_project_body(obj, *_):
    return list(obj.body.raw_data)


@project_stream_block.type_resolver
def resolve_project_body_type(obj, *_):
    if obj["type"] == "process":
        return "ProcessBlock"
    if obj["type"] == "figma":
        return "FigmaBlock"
    if obj["type"] == "github":
        return "GithubBlock"


@figma_block.field("url")
def resolve_url(obj, *_):
    return obj["value"]["url"]


@github_block.field("title")
@process_block.field("title")
@process_paragraph.field("title")
def resolve_title(obj, *_):
    return obj["value"]["title"]


@github_block.field("repo")
def resolve_repo(obj, *_):
    return obj["value"]["repo"]


@github_block.field("owner")
def resolve_owner(obj, *_):
    return obj["value"]["owner"]


@process_block.field("items")
def resolve_items(obj, *_):
    return list(obj["value"])


@process_block_item.type_resolver
def resolve_process_item_type(obj, *_):
    if obj["type"] == "title":
        return "ProcessTitle"
    if obj["type"] == "image":
        return "ProcessImage"
    if obj["type"] == "paragraph":
        return "ProcessParagraph"


@process_paragraph.field("paragraph")
def resolve_paragraph(obj, *_):
    value = obj["value"]["paragraph"]
    return value[0:3] + 'classname="P-Lato"' + value[3:]


@process_paragraph.field("image")
def resolve_image(obj, *_):
    image_id = obj["value"]["image"]
    if image_id:
        return common_models.CustomImage.objects.prefetch_renditions().get(id=image_id)
    else:
        return None


@image.field("rendition")
def resolve_image_rendition(obj: common_models.CustomImage, *_, **kwargs):
    # assume that all kwargs are rendition parameters
    filters = "|".join([f"{key}-{val}" for key, val in kwargs.items()])
    rendition = obj.get_rendition(filters)
    url = rendition.url
    seperator = "http"
    #Hacky fix for image url issue
    if setings.RENDER:
        urls = rendition.url.split(seperator)
        url = f"{seperator}{urls[-1]}"

    return {"url": url,
            "width": rendition.width,
            "height": rendition.height}


# Shallow resolvers are for streamfields inside streamfields.
# For some reason resolving the process items in the process block
# unpacks the dicts


@process_title.field("title")
def resolve_title_shallow(obj, *_):
    return obj["value"]


@process_image.field("image")
def resolve_image_shallow(obj, *_):
    image_id = obj["value"]
    return common_models.CustomImage.objects.prefetch_renditions().get(id=image_id)


schema = ariadne.make_executable_schema(
    ariadne.load_schema_from_path("schema.graphql"),
    query,
    external_link,
    image,
    home,
    project,
    figma_block,
    github_block,
    process_block,
    process_title,
    process_paragraph,
    process_image,
    project_stream_block,
    process_block_item,
    about_me,
    job,
    role,
)
