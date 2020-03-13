# from django.test import TestCase
import datetime
from django.utils.timezone import timezone
# Create your tests here.
from django.test import TestCase
from .models import Comment,Post
# Create your tests here.
class PostTestClass(TestCase):
    def setUp(self):
        self.manu = Post(title="manu",body="many")
    def test_instance(self):
        self.assertTrue(isinstance(self.manu,Post))
class CommentTestClass(TestCase):
    def setUp(self):
        self.manu = Comment(comment="manu")
    def test_instance(self):
        self.assertTrue(isinstance(self.manu,Comment))