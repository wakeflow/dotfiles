#!/usr/bin/env node
const { runCommands } = require(`./runCommands`)

runCommands([
  `git fetch`,
  `git checkout master`,
  `git pull origin master`,
  `git remote prune origin`,
])

