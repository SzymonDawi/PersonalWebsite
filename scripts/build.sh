#!/usr/bin/env bash
set -0 errexit


# poetry install --no-root

echo "running migrations"
python3 manage.py migrate

echo "Creating admin"
python3 manage.py createsuperuser --noinput --username $DJANGO_SUPERUSER_EMAIL --password $DJANGO_SUPERUSER_PASSWORD

python3 manage.py collectstatic