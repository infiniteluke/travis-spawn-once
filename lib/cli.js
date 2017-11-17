#!/usr/bin/env node
'use strict';
const meow = require('meow');
const spawnOnce = require('.');

const TOKEN_FLAG = 'ghTokenName';
const SKIP_PR_FLAG = 'skipPR';
const BUILD_LEADER_FLAG = 'buildLeaderId';
const TRAVIS_PRO_FLAG = 'travisPro';

const cli = meow(
  `
	Usage
	  $ travis-spawn-once "<command> <args>" --<opt>

	Options
		--${TOKEN_FLAG}, -g    The name of the environment variable holding the GitHub token
		--${SKIP_PR_FLAG}, -s         Skip the command on a PR build
		--${BUILD_LEADER_FLAG}, -b  Build leader id
		--${TRAVIS_PRO_FLAG}, -p      Indicate that you're using Travis Pro 

	Examples
	  $ travis-spawn-once "yarn deploy" --skip-pr
`,
  {
    flags: {
      [TOKEN_FLAG]: {
        type: 'string',
        alias: 'g',
        default: 'GH_TOKEN',
      },
      [SKIP_PR_FLAG]: {
        type: 'boolean',
        alias: 's',
        default: true,
      },
      [BUILD_LEADER_FLAG]: {
        type: 'number',
        alias: 'b',
        default: 1,
      },
      [TRAVIS_PRO_FLAG]: {
        type: 'boolean',
        alias: 'p',
        default: false,
      },
    },
  }
);

module.exports = spawnOnce;

(async () => {
  try {
    console.log('✅ ', await module.exports(cli.input[0], cli.flags));
  } catch (e) {
    console.error('❌ ', e);
  }
})();
