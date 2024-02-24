from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import SignupSerializer, AppUserSerializer
from .models import AppUser
from rest_framework.permissions import AllowAny
## Everything above is needed for User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import AppUser
from .serializers import AppUserSerializer



class SignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            #create_user is special method. must be used to create user
            user = User.objects.create_user(username=username, password=password)
            app_user = AppUser.objects.create(user=user)
            app_user.save()
            app_user_serializer = AppUserSerializer(app_user)

            return Response({
                'user_id': user.id,
                'trainer': app_user_serializer.data,
            }, status=status.HTTP_200_OK)


class AppUserView(APIView):
    """
    When a user makes a request:
    Try to get AppUser object that matches user

    Returns: Serialized Query of AppUser that matches user making request
    """
    def get(self, request):
        user = request.user

        try:
            app_user = AppUser.objects.get(user=user)
            serializer = AppUserSerializer(app_user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)