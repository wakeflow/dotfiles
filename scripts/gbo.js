#!/usr/bin/env node
import { run } from './runCommands.js'

const response = await run(`git branch`,true)
const branch = response.split(`\n`).find(line => line.includes(`*`)).slice(2).trim()

await run(`git fetch`)
if(branch === process.argv[2])
  await run(`git checkout master -q`)
await run(`git pull origin master -q`)
await run(`git checkout -b "${process.argv[2]}" -q`)
await run(`git push --set-upstream origin "${process.argv[2]}"`,true)
