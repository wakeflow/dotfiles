#!/usr/bin/env node
import { exec } from 'child_process'

export const run = async(command,quiet) => {
  console.log(` >>`,command,quiet ? `(quiet)` : ``)
  return new Promise((resolve,reject) => {
    let output = ``
    const p = exec(command)

    p.stdout.on(`data`,data => { 
      output += data
      if(!quiet) process.stdout.write(`${data}`)
    })

    if(!quiet)
      p.stderr.on(`data`,data => {
        console.log(`rejecting stderr`,data)
        reject(data)
      })

    p.on(`data`,d => output += d)

    if(!quiet)
      p.on(`error`,d => {
        console.log(`rejecting`,d)
        reject(d)
      })

    p.on(`exit`,() => {
      resolve(output)
    })

  })

}

export const runCommands = async commands => {
  for(let command of commands)
    try{
      await run(command)
    }catch(err){
      console.error(err)
      process.exit()
    }
}

