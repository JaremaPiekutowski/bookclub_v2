from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.utils.crypto import get_random_string

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .models import User
from .serializers import LoginSerializer, PasswordResetSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key, 'user_id': user.id})
            else:
                return Response(
                    {'error': 'Invalid username or password'},
                    status=status.HTTP_400_BAD_REQUEST
                    )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def password_reset(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.filter(email=email).first()
            if user:
                token = get_random_string(length=32)
                user.password_reset_token = token
                user.save()
                reset_link = f'http://localhost:3000/reset-password/{token}'
                send_mail(
                    'Password Reset',
                    f'Click the link to reset your password: {reset_link}',
                    'from@example.com',
                    [email],
                    fail_silently=False,
                )
            return Response({'message': 'Password reset email sent'})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
