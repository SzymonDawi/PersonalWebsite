# Generated by Django 4.2.8 on 2024-01-13 08:34

import django.db.models.deletion
import modelcluster.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("about_me", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Achievement",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "sort_order",
                    models.IntegerField(blank=True, editable=False, null=True),
                ),
                ("value", models.TextField()),
                (
                    "role",
                    modelcluster.fields.ParentalKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="aboutmepage_job_role_achievement",
                        to="about_me.role",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
