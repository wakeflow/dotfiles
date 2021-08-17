#!/usr/bin/env node

//gmpr = git merge pull request

const { run,runCommands } = require(`./runCommands`)

const main = async() => {
  const response = await run(`git branch`)
  const branch = response.slice(2).trim()
  if(branch === `master`) throw new Error(`You are on master branch`)
  runCommands([
    `git fetch origin`,
    `git rebase origin/master`,
    `git push -f -q`,
    `git checkout master`,
    `git merge ${branch}`,
    `git push`,
    `git push origin --delete ${branch}`,
    `git branch -d ${branch}`,
  ])
}

main()
