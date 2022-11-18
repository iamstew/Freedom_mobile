from django.shortcuts import render

# Create your views here.
def auth(request):
    return render(request, 'auth.html')

def home(request):
    return render(request, 'home.html')