$(document).ready(function() {


        // preload the image for each link
        $('#image_list a').each(function() {
                let img = new Image();
                img.src = $(this).attr('href');
        });

        // set up the event handlers for each link
        $('#image_list a').click(function(evt) {

    	        // get the image URL and caption for each image and animate the caption
                let image_URL = $(this).attr('href');
                let caption = $(this).attr('title');
                $('#caption').stop(true).fadeOut(3000);
                $('#image').stop(true).fadeOut(3000, function() {
                        $('#image').attr('src', image_URL);
                        $('#caption').text(caption);
                        $('#caption').fadeIn(3000);
                        $('#image').fadeIn(3000);
                        $('#caption').animate({fontSize: '2.0em'}, 3000);
                });

                // cancel the default action of each link
                evt.preventDefault();
        });

        // move the focus to the first link
        $('#image_list a').first().focus();

}); // end ready