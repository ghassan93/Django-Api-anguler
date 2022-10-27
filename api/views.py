from itertools import permutations
from django.shortcuts import render
from rest_framework import viewsets
from api.models import Movie,Rating
from api.serializers import MovieSerializer,RatingSerializer,UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from   rest_framework.permissions import IsAuthenticated





class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    authentication_classes=(TokenAuthentication,)
    







class MovieViewSet(viewsets.ModelViewSet):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer
    authentication_classes=(TokenAuthentication,)
    permission_classes=(IsAuthenticated,)
    
    
    
    @action(detail=True, methods=['POST'])
    def rate_movie(self, request,pk=None):
        if 'stars' in request.data:
            stars=request.data['stars']
            #user= User.objects.get(id=1)
            user= request.user
            print(user)
            
             
            movie=Movie.objects.get(id=pk)
            
            try:
                rating=Rating.objects.get(user=user.id,movie=movie.id)
                rating.stars =stars
                rating.save()
                serialize=RatingSerializer(rating,many=False)
                rate_response={'message':'rate was updated'}
                
                return Response(rate_response,status=status.HTTP_200_OK)
            except :
                print(user) ,print(movie),print(stars)
                rating=Rating.objects.create(user=user,movie=movie , stars=stars)
                serialize=RatingSerializer(rating,many=False)
                rate_response={'message':'rating criated','result':serialize.data} 
                return Response(rate_response,status=status.HTTP_200_OK)
            
        else:
            response={'message':'You need provide stars'}
            return Response(response,status=status.HTTP_400_BAD_REQUEST)
        
    
    
    
    
class RatingViewSet(viewsets.ModelViewSet):
    queryset=Rating.objects.all()
    serializer_class=RatingSerializer
    authentication_classes=(TokenAuthentication,)
    
    def update(self, request, *args, **kwargs):
              
        response={'message':'You cant update rating like that'}
        return Response(response,status=status.HTTP_400_BAD_REQUEST)
    
    def create(self, request, *args, **kwargs):
              
        response={'message':'You cant create rating like that'}
        return Response(response,status=status.HTTP_400_BAD_REQUEST)
    
            

    

