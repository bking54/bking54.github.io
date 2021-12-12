$(document).ready(function() {
    w3.includeHTML(function() {
        let cssVal = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwebpages.uncc.edu%2Fbking54%2Fitis3135%2Fproject%2F";
        let cssValEnd = "&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en";
        let htmlVal = "https://validator.w3.org/nu/?doc=https%3A%2F%2Fwebpages.uncc.edu%2Fbking54%2Fitis3135%2Fproject%2F";

        let name = document.URL;
        name = name.substring(51);

        let cssValHref = cssVal + name + cssValEnd;
        let htmlValHref = htmlVal + name;

        $('#cssVal').attr('href', cssValHref);
        $('#htmlVal').attr('href', htmlValHref);

        $('.menu-div').click(function() {
            $('#navigation').stop(true).slideToggle(700);
        });
    });
});