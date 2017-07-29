# UCSD-SUMS.github.io
This repository contains the files that generate the SUMS website.

Built with [Hakyll](https://jaspervdj.be/hakyll/)
[![CircleCI](https://circleci.com/gh/UCSD-SUMS/web/tree/hakyll.svg?style=svg)](https://circleci.com/gh/UCSD-SUMS/web/tree/hakyll)

The most up-to-date technical documentation is on the
[wiki](https://github.com/UCSD-SUMS/web/wiki).

# Installation

## TL;DR

```
export GIT_LFS_SKIP_SMUDGE=1
git clone https://github.com/UCSD-SUMS/UCSD-SUMS.github.io
curl -sSL https://get.haskellstack.org/ | sh
npm install -g yarn
cd UCSD-SUMS/github.io
yarn install
npm run stackSetup
npm run watchSite
```

## Individual Steps
- Install [Stack](https://www.haskellstack.org/) and [Node/NPM](https://nodejs.org).

- Use Stack to install GHC:
```
stack setup
```

- Clone this repository
(Note: binary files such as images and pdfs are stored in [git-lfs](https://git-lfs.github.com/). The first line prevents you from cloning all of these files.)
```
export GIT_LFS_SKIP_SMUDGE=1
git clone https://github.com/UCSD-SUMS/UCSD-SUMS.github.io
```

- Install [NPM](https://www.npmjs.com/) and use [Yarn](https://yarnpkg.com/en/) to install frontend dependencies
```
npm install -g yarn
yarn install
```
(This takes care of building/generating minified JS files for certain parts of the site.)

- Start the local webserver
```
npm run watchSite
```

Once this has finished, you can then navigate to `localhost:8000` to see the site.

- (Optional) Download the site's binary files separately.

Follow the instructions at [git-lfs.github.com](https://git-lfs.github.com/) to install, then in the
repository run
```
git lfs pull
```


There may be issues on Windows-based systems. See the
[wiki](https://github.com/UCSD-SUMS/web/wiki) for
more information.

# Editing Existing Events
All events are written in markdown files and kept in the `events` subfolder. If you aren't familiar with
markdown syntax, you can find most of what you need
[here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

To edit an event, first sign up for a Github account and ensure you have read/write access to the repository.

You can then navigate directly to the relevant file using Github's web UI, click the edit button on that file,
and commit your changes directly without having to download the repository.

# Adding a New Event
Use the
[Event Generator Tool](http://sums.ucsd.edu/static/eventGenerator.html)
to create a markdown file to start with. You can link to images
using standard markdown syntax - just upload images to the `static` folder through Github, then include them using something like
`[image alt text](static/imageName.png)`.

# Adding a New Page
To add an entirely new page, contact the web coordinator!

# Other Notes
All changes should be pushed to the `hakyll` branch, which kicks off the automated
build and deploy process through CircleCI.

