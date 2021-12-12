$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
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
            let response = 'response';
            $("#resource-display").html(response);
        }
    });
});
