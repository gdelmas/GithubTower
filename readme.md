**Github Tower** is a lightweight browser extension that allows you to use Github's "Clone in Desktop" button to open [Tower.app](http://www.git-tower.com) without the need of having the Github.app installed. The extension is available for Google Chrome and Safari.

# Setup
### Step 1: Download
Download and unzip [GithubTower.zip](https://github.com/gdelmas/GithubTower/releases).

### Step 2: Google Chrome
1. Click the Chrome *hamburger* menu icon on the browser toolbar.
2. Select Tools > Extensions.
3. Drag the extension file `GithubTower.crx` onto the Extensions page.

### Step 2: Safari
Open `GithubTower.safariextz`.

### Step 3: Tower.app
In [Tower.app](http://www.git-tower.com) > Settings > Integration select "Tower" to open repositories from github.com.

# Lightweight
Github's "Clone in Desktop" button only works if the official Github.app is installed on OS X. The [Github.app](https://mac.github.com) spawns a [helper "GitHub Conduit.app"](https://help.github.com/articles/github-conduit) which will always be running on the system. This helper has a webserver constantly listening for requests on the users local machine port 25035. If the Github website can reach this server it changes the "Clone in Desktop" button links to open in the users local Git App instead of redirecting to https://mac.github.com.

This browser extensions eliminates the need to have a local webserver process running by injecting [7 lines of code](https://github.com/gdelmas/GithubTower/blob/master/src-safari/GithubTower.safariextension/main.js) only into Github's website.

# Tower
Tower 2 is a wonderful Git client for OS X. It brings all of Git’s powerful features to your desktop. Try it out here: [http://www.git-tower.com](http://www.git-tower.com)
