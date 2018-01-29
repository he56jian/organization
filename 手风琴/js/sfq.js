$( document ).ready(function() {
    $('#pic ul li').mouseover(function(){
        $(this).stop(true).animate({width:'700px'},1000).siblings().stop(true).animate({width:'100px'},1000);
    });
    
   });