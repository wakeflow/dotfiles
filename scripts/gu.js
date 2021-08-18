#!/usr/bin/env node

//gu = git update

import { runCommands } from './runCommands.js'

runCommands([
  `git fetch -q`,
  `git checkout master -q`,
  `git pull origin master -q`,
  `git remote prune origin`,
])

