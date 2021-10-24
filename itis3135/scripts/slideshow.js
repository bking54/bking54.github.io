$(document).ready(function() {
    //preload images
    $('.img-list a').each(function() {
        let img = new Image();
        img.src = $(this).attr('href');
    });

    //click event handler
    $('.img-list a').click(function(evt) {
        let imgURL = $(this).attr('href');
        $('.big-img').attr('src', imgURL);
        evt.preventDefault();
    })
});
