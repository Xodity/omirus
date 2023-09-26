#!/usr/bin/env node
const { program } = require('commander');
const { exec } = require('child_process');

program
  .version('1.0.0')
  .description('CLI Description')
  .arguments('<arg1>')
  .action((arg1) => {
    if (arg1 === 'create-app') {
      const repoUrl = 'https://github.com/Laramus/qira-client.git';
      const destinationFolder = '';

      exec(`git clone ${repoUrl} ${destinationFolder}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error cloning repository: ${error.message}`);
          return;
        }
        console.log('Repository cloned successfully.');
      });
    } else {
      console.error(`Unknown command: ${arg1}`);
    }
  });

program.parse(process.argv);
