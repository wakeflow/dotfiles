#!/usr/bin/env node
const { runCommands } = require("./runCommands");

runCommands([
  'git fetch',
  'git checkout master',
  'git pull origin master',
  `git checkout -b ${process.argv[2]}`,
  `git push --set-upstream origin ${process.argv[2]}`,
])