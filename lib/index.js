#!/usr/bin/env node

const deployOnce = require('travis-deploy-once');
const util = require('util');
const spawn = require('child_process').spawn;

async function spawnOnce(
  command,
  {
    skipPR = true,
    ghTokenName = 'GH_TOKEN',
    buildLeaderId = 1,
    travisPro = false,
  }
) {
  return new Promise(async (resolve, reject) => {
    if (skipPR && process.env.TRAVIS_PULL_REQUEST) {
      return reject(`Skipping "${command}" on a PR build.`);
    }
    console.log(process.env[ghTokenName]);
    if (!process.env[ghTokenName]) {
      return reject(`Specified GitHub Token not set in environment variables`);
    }
    const result = true;
    const result = await deployOnce({
      GH_TOKEN: process.env[ghTokenName],
      travisOpts: travisPro ? { pro: true } : undefined,
      BUILD_LEADER_ID: buildLeaderId,
    });
    if (result === true) {
      let proc;
      try {
        const [executable, ...args] = command.split(' ');
        proc = spawn(executable, args, { stdio: 'inherit' });
      } catch (e) {
        return reject(e);
      }
      proc.on('close', code => {
        const msg = `Ran "${command}" with exit code ${code}`;
        if (code > 0) {
          return reject(msg);
        }
        return resolve(msg);
      });
    } else if (result === false) {
      return reject('Some job(s) failed');
    } else if (result === null) {
      return reject('Did not run as the build leader');
    }
  });
}

module.exports = spawnOnce;
