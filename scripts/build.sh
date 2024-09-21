#!/usr/bin/env bash
set -0 errexit


# poetry install --no-root

echo "running migrations"
python3 manage.py migrate

echo "Creating admin"
python3 manage.py createsuperuser --noinput

python3 manage.py collectstatic