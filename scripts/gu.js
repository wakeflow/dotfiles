#!/usr/bin/env node

//gu = git update

import { run } from './runCommands.js'

const response = await run(`git branch`,true)
const branch = response.split(`\n`).find(line => line.includes(`*`)).slice(2).trim()

await run(`git fetch -q`)
await run(`git checkout master -q`)
await run(`git pull origin master -q`)
await run(`git remote prune origin`)
await run(`git checkout ${branch}`,true)

