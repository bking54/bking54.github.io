$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 800,
        slideMargin: 20,
        randomStart: true,
        moveSlides: 1,
        pause: 6000,
        captions: true,
        pagerType: 'short'
    });
});