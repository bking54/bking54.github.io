$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $(data.teammembers).each(function() {
                var xmlDoc = $(this);
                $("#team").append
                ("<h3>" + this.name + "</h3>" +
                          this.title + "<br>" +
                          this.bio + "<br>");
            });
        }
    });
});