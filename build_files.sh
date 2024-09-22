#!/usr/bin/env bash
set -0 errexit


# poetry install --no-root

echo "install deps"
python3 -m pip install -r requirements.txt

echo "running migrations"
python3 manage.py migrate

echo "Creating admin"
python3 manage.py createsuperuser --noinput --username $DJANGO_SUPERUSER_EMAIL

python3 manage.py collectstatic --noinput