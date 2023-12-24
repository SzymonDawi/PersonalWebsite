from urllib.parse import urljoin, urlparse

from django.core import signing
from django.db import models as django_models
from django.utils.http import urlencode
from django.utils.translation import gettext_lazy as _
from wagtail import models
from wagtail.admin import panels
from wagtail.images.models import AbstractImage, AbstractRendition, Image
from wagtail_headless_preview.models import HeadlessMixin, PagePreview

PREVIEW_TOKEN_HEADER = "PREVIEW-TOKEN"


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


class BasePage(HeadlessMixin, models.Page):
    """Base wagtail page fro common functionality"""

    class Meta:
        abstract = True

    def relative_url(self, current_site=None, request=None):
        """
        Override relative_url to always return the page path
        """
        url_parts = self.get_url_parts(request=request)

        if url_parts is None or url_parts[1] is None or url_parts[2] is None:
            # Page is not routable
            return

        site_id, root_url, page_path = url_parts

        return page_path

    def get_preview_url(self, token):
        """Override HeadlessPreviewMixin so the frontend doesn't need to know how
        to map from wagtail content rtpes to Next pages

        Note that this assumes that the FE and Wagtail our pages follow the same
        URL stucture
        """
        client_root_url = self.get_client_root_url()

        query_params = urlencode(
            {"content_type": self.get_content_type(), "preview_token": token}
        )

        return urljoin(client_root_url, f"{urlparse(self.url)}?{query_params}")

    @classmethod
    def get_page_preview_from_request(cls, request):
        preview_token = request.headers.get(PREVIEW_TOKEN_HEADER)
        preview = None

        if preview_token:
            preview = cls.get_page_from_preview_token(token=preview_token)

        return preview

    @classmethod
    def validate_page_preview_token(cls, request):
        """Returns True if the given request has a valid token
        otherwise returns False
        """
        preivew_token = request.headers.get(PREVIEW_TOKEN_HEADER)

        if not preivew_token:
            return False

        try:
            # Check token is valid
            cls.get_preview_signer().unsign(preivew_token)
        except signing.BadSignature:
            return False

        return PagePreview.objects.filter(token=preivew_token).exists()

    @classmethod
    def get_page_preview_from_request_or_live(cls, request):
        """Get a preview or the live page

        Helper function for fetching singleton pages
        """
        preview = cls.get_page_preview_from_request(request=request)

        if preview:
            return preview
        else:
            return cls.objects.live().first()


class CustomImage(AbstractImage):
    admin_form_fields = Image.admin_form_fields + ()

    class Meta(AbstractImage.Meta):
        verbose_name = _("image")
        verbose_name_plural = _("images")
        permissions = [("choose_image", "Can choose image")]


class CustomRendition(AbstractRendition):
    image = django_models.ForeignKey(
        CustomImage, on_delete=django_models.CASCADE, related_name="renditions"
    )

    class Meta:
        unique_together = (("image", "filter_spec", "focal_point_key"),)
