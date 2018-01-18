(function() {
    var buttonElement = document.querySelector("a.get-repo-btn");

    if ( buttonElement === null ) {
        return;
    }

    buttonElement.removeAttribute('href');
    buttonElement.innerText = 'Open in Tower';
    buttonElement.setAttribute('aria-label', buttonElement.getAttribute('aria-label').replace('GitHub Desktop', 'Tower'));

    buttonElement.addEventListener('click', function(event) {
        event.preventDefault();

        var repoModalElement = buttonElement.parentElement.parentElement;
        var inputElements = repoModalElement.querySelectorAll('input[type="text"]');
        var isSSH = repoModalElement.classList.contains('on');

        var activeInputElement = inputElements[isSSH ? 1 : 0];

        window.location.href = 'gittower://openRepo/' + encodeURI(activeInputElement.value);
    });
}());