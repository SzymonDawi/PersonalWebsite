from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage

from src.settings import base


class PublicMediaStorage(S3Boto3Storage):
    location = 'media'
    default_acl = 'public-read'
    file_overwrite = False
    access_key = base.MEDIA_S3_ACCESS_KEY_ID
    secret_key = base.MEDIA_S3_SECRET_ACCESS_KEY
    bucket_name = base.MEDIA_S3_BUCKET_NAME
    custom_domain = base.MEDIA_HOST
    querystring_auth = False
