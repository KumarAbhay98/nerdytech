from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.RegisterPage,name='register'),
    path('login/',views.LoginPage,name='login'),
    path('home/',views.HomePage,name='home'),
    path('about/',views.AboutPage,name='about'),
    path('logout/',views.LogoutPage,name='logout'),
    path('registererror/',views.RegisterError,name='registererror'),
    path('loginerror/',views.LoginError,name='loginerror'),

]
