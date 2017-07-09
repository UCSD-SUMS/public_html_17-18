# UCSD-SUMS.github.io
This repository contains the files that generate the SUMS website.

Built with [Hakyll](https://jaspervdj.be/hakyll/)
[![CircleCI](https://circleci.com/gh/UCSD-SUMS/UCSD-SUMS.github.io/tree/hakyll.svg?style=svg)](https://circleci.com/gh/UCSD-SUMS/UCSD-SUMS.github.io/tree/hakyll)

The most up-to-date technical documentation is on the
[wiki](https://github.com/UCSD-SUMS/UCSD-SUMS.github.io/wiki).

# Installation

## TL;DR

```
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

- Clone this repository:
```
git clone https://github.com/UCSD-SUMS/UCSD-SUMS.github.io
```

- Use Yarn to install frontend dependencies
```
npm install -g yarn
yarn install
```

(This takes care of building/generating minified JS files for certain parts of the site.)

  - Alternatively, just use NPM directly (note: this can be much slower than using Yarn!)
  ```
  npm install
  ```

- Start the local webserver
```
npm run watchSite
```

Once this has finished, you can then navigate to `localhost:8000` to see the site.

  - Alternatively, you can run the Hakyll command directly:
  ```
  stack exec site watch
  ```

There may be issues on Windows-based systems. See the
[wiki](https://github.com/UCSD-SUMS/UCSD-SUMS.github.io/wiki) for
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

(ToDo: describe guidelines for where new pages should go, how to ensure they're included in the build, etc)

# Other Notes
All changes should be pushed to the `hakyll` branch, which kicks off the automated
build and deploy process through CircleCI.

