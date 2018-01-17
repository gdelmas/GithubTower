(function() {
    var buttonElement = document.querySelector("a[href^='x-github-client://']");

    if ( buttonElement != null ) {
       buttonElement.href = "github-mac://openRepo/" + buttonElement.getAttribute("href").substring(27);
    }
}());