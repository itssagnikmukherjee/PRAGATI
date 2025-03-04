from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

# Create your views here.

def index(request):
    return JsonResponse({'message':'Index Page'})

def about(request):
    return JsonResponse({'message':'About Page'})

def privacy(request):
    return JsonResponse({'message':'Privacy Page'})