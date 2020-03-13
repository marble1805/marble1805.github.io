$(function () {
    $('.nut-menu').click(function (e) { 
        e.preventDefault();
        $('.icon1').toggleClass('andi');
        $('.icon2').toggleClass('andi');
        $('nav').toggleClass('divao');
    });

    $('.m1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('header').offset().top
        }, 1000);
        $('nav').removeClass('divao');
        $('.icon1').removeClass('andi');
        $('.icon2').addClass('andi');
    });

    $('.m2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top
        }, 1000);
        $('nav').removeClass('divao');
        $('.icon1').removeClass('andi');
        $('.icon2').addClass('andi');
    });

    $('.m3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi3').offset().top
        }, 1000);
        $('nav').removeClass('divao');
        $('.icon1').removeClass('andi');
        $('.icon2').addClass('andi');
    });

    $('.m4').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi4').offset().top
        }, 1000);
        $('nav').removeClass('divao');
        $('.icon1').removeClass('andi');
        $('.icon2').addClass('andi');
    });

    $('.m5').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.contact').offset().top
        }, 1000);
        $('nav').removeClass('divao');
        $('.icon1').removeClass('andi');
        $('.icon2').addClass('andi');
    });

    $(window).scroll(function() {
        if (window.pageYOffset >= 200) {
            $('.back-to-top').addClass('hienra');
        } else{
            $('.back-to-top').removeClass('hienra');
        }
    });

    $('.back-to-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
});