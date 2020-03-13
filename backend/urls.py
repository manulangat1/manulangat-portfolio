from django.conf.urls import url
from .views import HomeView,AboutView,HomePicView,ProjectView,ContactView,PostView,PostCreateView,CommentView,CommentCreateView,PostDetailsView
from django.views.decorators.csrf import csrf_exempt

# url(r'^api/v1/some-resource$', csrf_exempt(SomeApiView.as_view())),
urlpatterns = [
    url(r'^$',HomeView.as_view(),name="home"),
    url(r'^about/$',AboutView.as_view(),name="About"),
    url(r'^pic/$',HomePicView.as_view(),name="HomePic"),
    url(r'^projects/$',ProjectView.as_view(),name="projects"),
    url(r'^contacts/$',ContactView.as_view(),name="contacts"),
    url(r'^posts/$',PostView.as_view(),name="posts"),
    url(r'^posts/create/$',PostCreateView.as_view(),name="postsCreate"),
    url(r'^posts/comment/$',CommentView.as_view(),name="comments"),
    url(r'^posts/create/comment/$',csrf_exempt(CommentCreateView.as_view())),
    url(r'^posts/(?P<pk>\d+)/$', PostDetailsView.as_view(),name="post-details"),
    
]