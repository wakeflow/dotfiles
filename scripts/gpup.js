#!/usr/bin/env node
import { runCommands } from './runCommands.js'

runCommands([
  `git push --set-upstream origin "${process.argv[2]}"`,
])
