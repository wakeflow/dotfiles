#!/usr/bin/env node
import { runCommands } from './runCommands.js'

runCommands([
  `git add .`,
  `git commit -m "${process.argv[2]}" -q`,
  `git push -q`,
])
