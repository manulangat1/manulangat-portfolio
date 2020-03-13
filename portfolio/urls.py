from django.contrib import admin
from django.conf.urls import url,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.documentation import include_docs_urls
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Polls API')
urlpatterns = [
    url(r'',include('frontend.urls')),
    url(r'api/',include('backend.urls')),
    url(r'admin/', admin.site.urls),
    url(r'docs/', include_docs_urls(title='Polls API')),
    url(r'swagger-docs/', schema_view),
        
]


# ...
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
