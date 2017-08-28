(function() {
    var buttonElement = document.querySelector("a[href^='x-github-client://']");

    if ( buttonElement != null ) {
        buttonElement.href = "gittower://openRepo/" + buttonElement.getAttribute("href").substring(27);
    }
}());