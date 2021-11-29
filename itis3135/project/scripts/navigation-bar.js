$(document).ready(function() {
    //Show navigation bar
    $('#navigation').slideToggle(1000);

    //Toggle navigation bar
    $('#menu-button').click(function() {
        $('#navigation').stop(true).slideToggle(700);
    });
});