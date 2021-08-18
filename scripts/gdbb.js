#!/usr/bin/env node

//gdbb = git delete both branches (both local and remote)

import { run } from './runCommands.js'

await run(`git checkout master -q`)
await run(`git branch -D ${process.argv[2]}`)
await run(`git remote prune origin`)
await run(`git push --delete origin ${process.argv[2]}`,true)
