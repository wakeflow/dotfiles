#!/usr/bin/env node
const { runCommands } = require("./runCommands");

runCommands([
  'git add .',
  `git commit -m "${process.argv[2]}"`,
  'git push',
  'git --no-pager log --oneline --decorate --graph --all -n 12',
])
