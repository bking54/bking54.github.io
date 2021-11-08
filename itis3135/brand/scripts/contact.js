$(document).ready(function() {

    $('#submit').click(function(evt) {
        evt.preventDefault();
        let fname = $('#fname').val().trim();
        let lname = $('#lname').val().trim();
        let email = $('#email').val().trim();
        let feedback = $('#feedback').val().trim();
        if (!(fname == "" || lname == "" || email == "" || feedback == "")) {
            let result = "Thank you, " + fname + " " + lname + " for your feedback. We will get back to you at your email address: " + email + ".";
            $('#results').text(result);
        }
    });

});