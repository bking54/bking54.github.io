$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json/resources.json",
        beforeSend: function() {
            $("#resource-display").html("Loading...");
        },
        timeout: 10000,
        error: function() {
            $("#resource-display").html("Error loading JSON data");
        },
        dataType: "json",
        success: function(data) {
            $("#resource-display").html("");
                let response = '<h2>' + data.resources[0].name + '</h2>';
                response += '<p>' + data.resources[0].statement + '</p>';
                response += '<a href="' + data.resources[0].url + '"><div class="button-pink">Click here to visit their page</div></a>';
                $("#resource-display").html(response);
        }
    });

    $("#select-box").change(function () {
        let option = $(this).find(":selected").val();
        option = parseInt(option);

        $('#resource-display').stop(true).slideToggle(1000, function() {
            $.ajax({
                type: "get",
                url: "json/resources.json",
                beforeSend: function() {
                    $('#resource-display').stop(true).slideToggle(2000);
                },
                timeout: 10000,
                error: function() {
                    $("#resource-display").html("Error loading JSON data");
                },
                dataType: "json",
                success: function(data) {
                    $("#resource-display").html("");
                    let response = '<h2>' + data.resources[option - 1].name + '</h2>';
                    response += '<p>' + data.resources[option - 1].statement + '</p>';
                    response += '<a href="' + data.resources[option - 1].url + '"><div class="button-pink">Click here to visit their page</div></a>';
                    $("#resource-display").html(response);
                }
            });
        });
    });
});
