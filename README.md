# UCSD-SUMS.github.io
This repository contains the files that generate the SUMS website.

Built with [Hakyll](https://jaspervdj.be/hakyll/) [![CircleCI](https://circleci.com/gh/UCSD-SUMS/UCSD-SUMS.github.io/tree/hakyll.svg?style=svg)](https://circleci.com/gh/UCSD-SUMS/UCSD-SUMS.github.io/tree/hakyll)

The most up-to-date docs about installation, building, technical
architecture, and how-tos are on the
[wiki](https://github.com/UCSD-SUMS/UCSD-SUMS.github.io/wiki).

# Installation
- Install [Stack](https://www.haskellstack.org/)
```
curl -sSL https://get.haskellstack.org/ | sh
```

- Use Stack to install GHC
```
stack setup
```


- Use Stack to build and deploy locally
```
git clone https://github.com/UCSD-SUMS/UCSD-SUMS.github.io
stack build
stack exec site watch
```

Once it is finished, you can then navigate to `localhost:8000` to see the site.

There may be some windows issues. See the
[wiki](https://github.com/UCSD-SUMS/UCSD-SUMS.github.io/wiki) for
more.

# Editing Existing Events
Todo: Describe how to do this through the UI. Describe layout / organization of events, structure of yaml header.

# Adding a New Event
Todo: Describe how to do this through the Github UI, how to add binary content like images, etc.

# Adding a New Page
Todo: Describe where to add new directories or pages, how to make sub-pages, how to edit existing pages to add links to new pags.

# Other Notes

All changes should be pushed to the `hakyll` branch, which kicks off the automated
build and deploy process.

After making a change, run the following:
```
stack exec site clean
stack exec site watch
```
