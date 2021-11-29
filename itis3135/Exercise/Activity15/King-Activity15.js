$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#faculty").html("");
            let response = '';
            for (let n = 0; n < data.facultymembers.length; n++) {
                response += '<img src="' + data.facultymembers[n].image + '"><h2>' + data.facultymembers[n].full_name + '</h2><h3>' + data.facultymembers[n].department + '</h3><p>' + data.facultymembers[n].bio + '</p>';
            }
            $("#faculty").html(response);
        }
    });
});
