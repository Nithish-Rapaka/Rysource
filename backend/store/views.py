from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product,Category
from .serializers import CategorySerializer,ProductSerializer
from django.contrib.auth.models import User

@api_view(['GET'])
def get_products(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    category=Category.objects.all()
    serializer=CategorySerializer(category,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def register(request):
    if request.method=='POST':
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        email=request.POST.get('email')
        isExist=User.objects.filter(email=email)
        password=request.POST.get('password')
        if isExist.exists():
            return Response({"message":"User already exist!"},status=400)

        User.objects.create_user(
                username=email,
                first_name=first_name,
                last_name=last_name,
                email=email,
                password=password,
            )
        return Response(
            {"message":"User registered successfully"},status=201
        )
         