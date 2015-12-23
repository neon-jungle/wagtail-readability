from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from wagtail.wagtailadmin.modal_workflow import render_modal_workflow
from wagtailreadability import textstat


@csrf_exempt
def display(request):
    if request.method != "POST":
        response = HttpResponse('<h1>Method not allowed.</h1>', status=405)
        response['Allow'] = 'POST'
        return response

    context = {}
    try:
        score = textstat.flesch_reading_ease(request.POST['text'])
        if score > 100:
            score = 100
    except ValueError as e:
        context = {
            'error': e,
        }
    else:
        context = {
            'text': request.POST['text'],
            'score': score,
        }
    return render_modal_workflow(request, 'wagtailreadability/display.html', 'wagtailreadability/display.js', context)
