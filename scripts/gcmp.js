#!/usr/bin/env node
import { runCommands } from './runCommands.js'

runCommands([
  `git add .`,
  `git commit -m "${process.argv[2]}"`,
  `git push`,
  `git --no-pager log --oneline --decorate --graph --all -n 12`,
])
