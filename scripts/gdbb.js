#!/usr/bin/env node

//gdbb = git delete both branches (both local and remote)

const { runCommands } = require(`./runCommands`)

runCommands([
  `git checkout master`,
  `git branch -D ${process.argv[2]}`,
  `git remote prune origin`,
  `git push --delete origin ${process.argv[2]}`,
])
