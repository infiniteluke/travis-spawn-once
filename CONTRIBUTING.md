# Contributing

## Code of Conduct

Before contributing, please read the [code of conduct](./CODE_OF_CONDUCT.md)

## Getting Setup

1. Fork this repository
2. Clone your fork
3. Branch the latest master with a reasonable branch name

## Linting

```sh
make lint # run the linter
```

## Commits

All commit messages must follow the [Conventional Commits Specification](https://conventionalcommits.org/) which can be described like so:

```
type(scope?): subject

body?
footer?
```

[Commitlint](https://github.com/marionebl/commitlint) is setup to enforce this convention.

### Commitlint Rules:
- [@commitlint/config-angular](https://github.com/marionebl/commitlint/tree/master/@commitlint/config-angular#rules): Enforces common &#8220;types&#8221; , casing, length rules etc..

### Suggestions:
If your commit fixes an issue, mention the issue number in your commit body or footer [as recommended by GitHub](https://help.github.com/articles/closing-issues-using-keywords/).

Example:
```
feat(cats): Add more cat pics
Closes #123, Closes #456
```

## AUTHORS file

If you would like, when making your PR, add yourself to the AUTHORS file by appending `Name <githubusername>`. Doing so will add your name to contributor details list in the [Contributing](https://github.com/infiniteluke/travis-spawn-once#Contributing) section.



