$(document).ready(function(){
    let url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&tags=vectacorpbuilding&format=json&jsoncallback=?";

    $.getJSON(url, function(data) {
        $('#new_building').html('');
        let response = "";
        for (let n = 0; n < data.items.length; n++) {
            response += '<a href="' + data.items[n].media.m + '" data-lightbox="images" data-title="' + data.items[n].title +'">' + '<img src="' + data.items[n].media.m + '">' + '</a>';
        }
        $('#new_building').html(response);
    });
});