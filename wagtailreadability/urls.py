from __future__ import absolute_import, unicode_literals

from django.conf.urls import url

from .views import display

urlpatterns = [
    url(r'^display/$', display.display,
        name='wagtailreadability_display'),
]
