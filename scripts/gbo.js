#!/usr/bin/env node
import { run } from './runCommands.js'

await run(`git fetch`)
await run(`git checkout master -q`)
await run(`git pull origin master -q`)
await run(`git checkout -b ${process.argv[2]} -q`)
await run(`git push --set-upstream origin ${process.argv[2]}`,true)
