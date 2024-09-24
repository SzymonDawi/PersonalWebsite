#!/usr/bin/env bash
set -0 errexit

poetry install --no-root

echo "running migrations"
python manage.py migrate

echo "Creating admin"
python manage.py createsuperuser --noinput --username $DJANGO_SUPERUSER_EMAIL

python manage.py collectstatic --noinput