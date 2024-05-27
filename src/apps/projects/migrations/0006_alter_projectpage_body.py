# Generated by Django 4.2.8 on 2024-05-27 09:59

import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("projects", "0005_alter_projectpage_body"),
    ]

    operations = [
        migrations.AlterField(
            model_name="projectpage",
            name="body",
            field=wagtail.fields.StreamField(
                [
                    (
                        "process",
                        wagtail.blocks.StreamBlock(
                            [
                                ("title", wagtail.blocks.CharBlock()),
                                (
                                    "paragraph",
                                    wagtail.blocks.StructBlock(
                                        [
                                            (
                                                "title",
                                                wagtail.blocks.CharBlock(
                                                    blank=True, required=False
                                                ),
                                            ),
                                            (
                                                "paragraph",
                                                wagtail.blocks.RichTextBlock(),
                                            ),
                                            (
                                                "image",
                                                wagtail.images.blocks.ImageChooserBlock(
                                                    blank=True, required=False
                                                ),
                                            ),
                                        ]
                                    ),
                                ),
                                ("image", wagtail.images.blocks.ImageChooserBlock()),
                            ]
                        ),
                    ),
                    (
                        "figma",
                        wagtail.blocks.StructBlock(
                            [("url", wagtail.blocks.CharBlock())]
                        ),
                    ),
                    (
                        "github",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock()),
                                ("repo", wagtail.blocks.CharBlock()),
                                ("owner", wagtail.blocks.CharBlock()),
                                (
                                    "dirs_to_include",
                                    wagtail.blocks.ListBlock(
                                        wagtail.blocks.CharBlock()
                                    ),
                                ),
                            ]
                        ),
                    ),
                ],
                blank=True,
                null=True,
                use_json_field=True,
            ),
        ),
    ]
