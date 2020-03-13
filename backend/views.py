from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,ListAPIView,CreateAPIView,RetrieveUpdateDestroyAPIView,RetrieveAPIView
from rest_framework import permissions

from .models import Home,About,HomePic,Project,Contact,Post,Comment
from .serializers import HomePicSerializer,HomeSerializer,AboutSerializer,ProjectSerializer,ContactSerializer,PostSerializer,PostCreateSerializer,CommentSerializer,CommentCreateSerializer

# Create your views here.
class HomeView(ListAPIView):
    serializer_class = HomeSerializer
    queryset = Home.objects.all()
class HomePicView(ListAPIView):
    serializer_class = HomePicSerializer
    queryset = HomePic.objects.all()
class AboutView(ListAPIView):
    serializer_class = AboutSerializer
    queryset = About.objects.all()
class ProjectView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
class ContactView(ListAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
class PostView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
class PostDetailsView(RetrieveAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
class PostCreateView(CreateAPIView):
    serializer_class = PostCreateSerializer
    queryset = Post.objects.all()
class CommentView(ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
class CommentCreateView(ListCreateAPIView):
    serializer_class = CommentCreateSerializer
    queryset = Comment.objects.all()
