var reg = document.getElementsByClassName("register");

var btn = document.getElementById("signin");

$('#signin').click(function(){

    $('.register').addClass('transformar');
    $('.showregister').addClass('show');
 
    $('.showsignin').removeClass('show');
});

$('#signup').click(function(){

    $('.register').removeClass('transformar');
    $('.showregister').removeClass('show');
 
    $('.showsignin').addClass('show');
});
