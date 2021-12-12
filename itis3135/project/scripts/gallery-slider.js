$(document).ready(function() {
    // preload the image for each link
    $('li img').each(function() {
        let img = new Image();
        img.src = $(this).attr('src');
    });

    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: false,
        moveSlides: 1,
        pause: 4000,
        captions: true
    });
});