#!/usr/bin/env node

//gmpr = git merge pull request

import { run } from './runCommands.js'

const response = await run(`git branch`)
const branch = response.split(`\n`).find(line => line.includes(`*`)).slice(2).trim()
if(branch === `master`) throw new Error(`You are on master branch`)
await run(`git fetch origin -q`)
await run(`git rebase origin/master -q`)
await run(`git push -f -q`)
await run(`git checkout master -q`)
await run(`git merge ${branch} --no-edit --ff-only -m "hello"`)
await run(`git push -q`)
await run(`git push origin --delete ${branch}`,true)
await run(`git branch -d ${branch}`)
