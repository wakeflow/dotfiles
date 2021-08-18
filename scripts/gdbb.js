#!/usr/bin/env node

//gdbb = git delete both branches (both local and remote)

import { runCommands } from './runCommands.js'

runCommands([
  `git checkout master -q`,
  `git branch -D ${process.argv[2]}`,
  `git remote prune origin`,
  `git push --delete origin ${process.argv[2]}`,
])
