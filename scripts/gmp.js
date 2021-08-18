#!/usr/bin/env node

//gmpr = git merge pull request

import { run,runCommands } from './runCommands.js'

const response = await run(`git branch`)
const branch = response.slice(2).trim()
if(branch === `master`) throw new Error(`You are on master branch`)
console.log({ branch })
runCommands([
  `git fetch origin -q`,
  `git rebase origin/master -q`,
  `git push -f -q`,
  `git checkout master -q`,
  `git merge ${branch} --no-edit --ff-only -m "hello"`,
  `git push`,
  `git push origin --delete ${branch}`,
  `git branch -d ${branch}`,
])
