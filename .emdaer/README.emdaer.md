# <!--emdaer-p
  - '@emdaer/plugin-value-from-package'
  - value: name
--> · <!--emdaer-p
  - '@emdaer/plugin-shields'
  - shields:
      - alt: 'Travis'
        image: 'travis/infiniteluke/travis-spawn-once.svg'
        link: 'https://travis-ci.org/infiniteluke/travis-spawn-once/'
        style: 'flat-square'
      - alt: 'Documented with emdaer'
        image: 'badge/📓-documented%20with%20emdaer-F06632.svg'
        link: 'https://github.com/infiniteluke/travis-spawn-once'
        style: 'flat-square'
-->
<!--emdaer-p
  - '@emdaer/plugin-value-from-package'
  - value: description
-->

## Table of Contents

<!-- toc -->

## Usage

```yml
language: node_js
node_js:
  - 8.9
  - 9
...
after_success:
  - travis-spawn-once .travis/after_success.sh
```

## Options
```
🔂 run a command only once in the travis test matrix

Usage
  $ travis-spawn-once "<command> <args>" --<opt>

Options
      --ghTokenName, -g    The name of the environment variable holding the GitHub token
      --skipPR, -s         Skip the command on a PR build
      --buildLeaderId, -b  Build leader id
      --travisPro, -p      Indicate that you're using Travis Pro 

Examples
  $ travis-spawn-once "yarn deploy" --skip-pr
```

## Contributing

If you'd like to make travis-spawn-once better, please read our [guide to contributing](./CONTRIBUTING.md).

<!--emdaer-p
  - '@emdaer/plugin-contributors-details-github'
-->

## License

<!--emdaer-p
  - '@emdaer/plugin-license-reference'
-->

<!--emdaer-t
  - '@emdaer/transform-prettier'
  - options:
      printWidth: 500
      singleQuote: true
      trailingComma: es5
-->
<!--emdaer-t
  - '@emdaer/transform-smartypants'
  - options: q
-->
<!--emdaer-t
  - '@emdaer/transform-table-of-contents'
-->
