$(function () {
    // $('.hambergerbox').on('click',function () {
    // $('.mobileMenu2').css({'display':'block'})
    // });
    $('.hambergerbox').hover(function(){
    $(this).find('ul').stop().slideDown(1000);
    }, function(){
    $(this).find('ul').stop().slideUp(1000);
    });
})