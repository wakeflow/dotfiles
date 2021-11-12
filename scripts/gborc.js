#!/usr/bin/env node
import { run } from './runCommands.js'

const branch = `env/revc-100000/feature/uat-${process.argv[2]}`

await run(`git fetch`)
await run(`git checkout master -q`)
await run(`git pull origin master -q`)
await run(`git checkout -b "${branch}" -q`)
await run(`git push --set-upstream origin "${branch}"`,true)
