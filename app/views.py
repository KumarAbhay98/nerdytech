from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.
# The below line of code will make sure that nobody can visit ur homepage before login
@login_required(login_url='login')
def HomePage(request):
    return render(request,'index.html')

def RegisterPage(request):
    if request.method == "POST":
        username=request.POST.get('username')
        email=request.POST.get('email')
        pass1=request.POST.get('password1')
        pass2=request.POST.get('password2')

        # condition to check whether pass1 == pass2
        if pass1!=pass2:
            return redirect('registererror')
        else:
            # creating user here
            my_user=User.objects.create_user(username,email,pass1)
            my_user.save()
            return redirect('login')
    return render(request,'register.html')

def LoginPage(request):
    if request.method == "POST":
        userame=request.POST.get('username')
        pass1=request.POST.get('password')

        # now we will autheticate using login module now uname i.e register is from model and username is from login
        user=authenticate(request,username=userame, password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return redirect('loginerror')
    return render(request,'login.html')

@login_required(login_url='login')
def AboutPage(request):
    return render(request,'about.html')

def LogoutPage(request):
    logout(request)
    return redirect('login')

def RegisterError(request):
    return render(request,'registererror.html')
    
def LoginError(request):
    return render(request,'loginerror.html')
    

