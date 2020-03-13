from rest_framework import serializers


from .models import Home,About,HomePic,Job,Project,Contact,Post,Tags,Comment

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self,value):
        return value
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id','comment',)
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = ('id','title','body','sub','tags','comments','comment_count',)
    def get_comments(self,obj):
        comments = CommentSerializer(obj.comments.order_by('-pub_date'),many=True).data
        return comments
    def get_tags(self,obj):
        tags = TagsSerializer(obj.tags.all(),many=True).data
        return tags
    def get_comment_count(self,obj):
        comments = obj.comments.count()
        return comments


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

class HomePicSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePic
        fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
    jobs = serializers.SerializerMethodField()
    class Meta:
        model = About
        fields = ('title','bio','pic','details','jobs',)
    def get_jobs(self,obj):
        jobs = JobSerializer(obj.jobs.all(),many=True).data
        return jobs

class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'