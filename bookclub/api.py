from rest_framework.routers import DefaultRouter

from books.views import BookViewSet
from users.views import UserViewSet

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"books", BookViewSet)
