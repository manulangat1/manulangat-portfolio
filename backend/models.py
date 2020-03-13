from django.db import models
from tinymce.models import HTMLField
# Create your models here.

class Home(models.Model):
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200,null=True,blank=True)
    pic = models.ImageField(upload_to='articles/',null=True,blank=True)
    details = models.CharField(max_length=200)

    def __str__(self):
        return self.firstName
class HomePic(models.Model):
    pic = models.ImageField(upload_to='articles')
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.pic)
class About(models.Model):
    title = models.CharField(max_length=200)
    bio = models.CharField(max_length=100,null=True,blank=True)
    pic = models.ImageField(upload_to='articles/',null=True,blank=True)
    details = models.CharField(max_length=200)

    def __str__(self):
        return self.title
class Job(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    jobs = models.ForeignKey(About,on_delete=models.CASCADE,related_name="jobs",null=True,blank=True)

    def __str__(self):
        return self.name
class Project(models.Model):
    name = models.CharField(max_length=50)
    pic= models.ImageField(upload_to='articles/')
    github = models.URLField()
    proj_url = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.proj_url
class Contact(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    Address = models.CharField(max_length=100)

    def __str__(self):
        return self.email
class Tags(models.Model):
    language = models.CharField(max_length=100)
    def __str__(self):
        return self.language
class Post(models.Model):
    title= models.CharField(max_length=100)
    body = models.TextField()
    sub = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tags)

    def __str__(self):
        return self.title
class Comment(models.Model):
    post =models.ForeignKey(Post,on_delete=models.CASCADE,related_name="comments")
    comment = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    def __str__(self):
        return self.comment
