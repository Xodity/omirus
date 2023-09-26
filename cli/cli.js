#!/usr/bin/env node
const { program } = require('commander');

program
  .version('1.0.0')
  .description('CLI Description')
  .option('-o, --option', 'Option Description')
  .arguments('<arg1> <arg2>')
  .action((arg1, arg2) => {
    console.log('Argumen 1:', arg1);
    console.log('Argumen 2:', arg2);
  });

program.parse(process.argv);
