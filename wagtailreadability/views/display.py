from django.shortcuts import render
from wagtail.wagtailadmin.modal_workflow import render_modal_workflow


def display(request):
    return render_modal_workflow(request, 'wagtailreadability/display.html', 'wagtailreadability/display.js')
