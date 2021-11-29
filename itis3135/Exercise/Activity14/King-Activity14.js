$(document).ready(function() {
    $('#nav_list a').click(function(evt) {
        let title = $(this).attr('title');
        let url = "json_files/" + title + ".json";
        makeRequest(url, title);
        evt.preventDefault();
    });

    function makeRequest(request_url, title) {
        $.ajax({
            type: "get",
            url: request_url,
            beforeSend: function() {
                $("main h2").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $('main h2').html(data.speakers[0].month);
                $('main h3').html(data.speakers[0].speaker);
                $('main p').html(data.speakers[0].text);
                $('main img').attr("src", data.speakers[0].image);
                let alt_text = title + "_picture";
                $('main img').attr("alt", alt_text);
            }
        });
    }
}); // end ready