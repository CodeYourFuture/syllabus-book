# Contributing

To contribute to the Code Your Future syllabus, fork and open a pull request to
[this repository](https://github.com/code-your-future/syllabus) or one of the
[submodules](https://github.com/code-your-future/syllabus).

## Publish the Gitbook

Install the [GitBook](https://github.com/GitbookIO/gitbook) CLI:
```sh
npm install -g gitbook-cli
```

If the changes you want to publish are in one of the modules, make sure your
changes have landed into the `master` branch of that repository.

Pull the latest syllabus modules:
```
git submodule update --init --remote --recursive
```

Test your changes:
```
gitbook serve
open http://localhost:4000
```

Build the docsite into the `_book` directory
```
gitbook build
```

Publish the built `_book` directory to GitHub pages
```
git commit -am 'Publish gitbook'
git subtree push --prefix _book origin gh-pages
```

## Add new modules

Add a git submodule: (use `https` in favour of `git` urls for consitency, but remember the trailing `.git`)
```
git submodule add https://github.com/Code-Your-Future/new-repository.git
```

Add a new entry in [SUMMARY.md](https://github.com/Code-Your-Future/syllabus/blob/master/SUMMARY.md).
If the module contains many individual markdown files, add them as nested bullets under the main README.

[Build and publish](#publish-the-gitbook) the site.
