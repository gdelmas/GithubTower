(function() {
    var aElements = document.getElementsByTagName('a');

    for ( var i = 0; i < aElements.length; i++) {
        var aElement = aElements[i];
        var dataUrl = aElement.getAttribute("data-url");

        if ( dataUrl != null && dataUrl.indexOf('github-mac://') == 0 ) {
            aElement.href = dataUrl;
            break;
        }
    }
}());