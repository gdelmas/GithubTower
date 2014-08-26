**Github Tower** is a lightweight Safari extension that allows you to use Github's "Clone in Desktop" button to open [Tower.app](http://www.git-tower.com) without the need of having the Github.app installed.

#Setup
Download, open and install [GithubTower.safariextz](https://github.com/gdelmas/GithubTower/releases). In [Tower.app](http://www.git-tower.com) > Settings > Integration select "Tower" to open repositories from github.com.

#Lightweight
Github's "Clone in Desktop" button only works if the official Github.app is installed on OS X. The [Github.app](https://mac.github.com) spawns a [helper "GitHub Conduit.app"](https://help.github.com/articles/github-conduit) which will always be running on the system. This helper has a webserver constantly listening for requests on the users local machine port 25035. If the Github website can reach this server it changes the "Clone in Desktop" button links to open in the users local Git App instead of redirecting to https://mac.github.com.

The Safari extensions eliminates the need to have a local webserver process running by injecting [7 lines of code](https://github.com/gdelmas/GithubTower/blob/master/src-safari/GithubTower.safariextension/main.js) only into Github's website.

#Tower
Tower 2 is a wonderful Git client for OS X. It brings all of Git’s powerful features to your desktop. Try it out here: [http://www.git-tower.com](http://www.git-tower.com)
