$(document).ready(function() {

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.content__slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 7,
        waitForAnimate: false,
    });

    $('.content__suggestion__items').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 400,
        easing: 'ease',
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 7,
        waitForAnimate: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
})