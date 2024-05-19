from .base import *

DEBUG = not env("RENDER")

AWS_S3_URL_PROTOCOL = 'https'
AWS_S3_USE_SSL = True
AWS_S3_VERIFY = True
AWS_STORAGE_BUCKET_NAME = env("AWS_STORAGE_BUCKET_NAME")
AWS_ACCESS_KEY_ID = env("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("AWS_SECRET_ACCESS_KEY")
AWS_REGION = env("AWS_REGION")
AWS_S3_CUSTOM_DOMAIN = f"{AWS_STORAGE_BUCKET_NAME}.s3.{AWS_REGION}.amazonaws.com"

MEDIA_URL = f'{AWS_S3_URL_PROTOCOL}://{AWS_S3_CUSTOM_DOMAIN}'
MEDIA_HOST=f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'

# Tell Django to copy statics to the `staticfiles` directory
# in your application directory on Render.
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

STORAGES = {
    "default": {
        "BACKEND": 'storages.backends.s3boto3.S3Boto3Storage',
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage"
    },
    "OPTIONS": {
        "bucket_name": AWS_STORAGE_BUCKET_NAME,
        "region_name": AWS_REGION,
        "custom_domain": AWS_S3_CUSTOM_DOMAIN,
    }
}


try:
    from .local import *
except ImportError:
    pass
