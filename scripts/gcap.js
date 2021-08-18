#!/usr/bin/env node
import { runCommands } from './runCommands.js'

runCommands([
  `git add .`,
  `git commit --amend --no-edit`,
  `git push -f`,
])
