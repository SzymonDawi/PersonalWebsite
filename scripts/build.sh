#!/usr/bin/env bash
set -0 errexit

poetry install

python manage.py migrate