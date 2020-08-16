(function() {
    const divElement = document.querySelector('.get-repo-modal div ul');
    if (!divElement) { return; }

    const linkElement = divElement.children[0].querySelector('a');

    linkElement.removeAttribute('href');
    linkElement.innerText = 'Open in Tower';
    linkElement.removeAttribute('data-open-app');
    linkElement.style.cursor = 'pointer';

    linkElement.addEventListener('click', event => {
        event.preventDefault();

        const data = JSON.parse(linkElement.getAttribute('data-hydro-click'));
        let repositoryURL = data.payload.originating_url;

        var repoModalElement = document.querySelector('.get-repo-modal');
        var isSSH = repoModalElement.classList.contains('on');

        if (isSSH) {
            repositoryURL = repositoryURL.replace('https://github.com/', 'git@github.com:');
        }

        window.location.href = 'gittower://openRepo/' + encodeURI(repositoryURL);
    });
}());
