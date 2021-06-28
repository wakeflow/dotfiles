#!/usr/bin/env node
const { runCommands } = require("./runCommands");

runCommands([
  'hub pull-request -p --no-edit',
])