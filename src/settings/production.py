from .base import *

DEBUG = not env("RENDER")

try:
    from .local import *
except ImportError:
    pass
