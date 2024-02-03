#!/usr/bin/env bash
set -0 errexit

poetry install --no-root

python manage.py migrate