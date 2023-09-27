#!/usr/bin/env node
const { program } = require('commander');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

program
  .version('1.0.0')
  .description('CLI Description')
  .command('create-app <folderName>')
  .action((folderName) => {
    if (folderName === '.') {
      folderName = process.cwd();
    }

    const repoUrl = 'https://github.com/Laramus/qira-client.git';
    const destinationPath = path.resolve(folderName);

    exec(`git clone ${repoUrl} ${destinationPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error cloning repository: ${error.message}`);
        return;
      }
      console.log(`app created successfully in path '${folderName}.'`);

      const gitFolder = path.join(destinationPath, '.git');
      const ideaFolder = path.join(destinationPath, '.idea');
      if (fs.existsSync(gitFolder)) {
        fse.removeSync(gitFolder);
        fse.removeSync(ideaFolder);
        console.log(`clearing data directory in path`);
      }

      // console.log(`your app now available in '${folderName}'.`);
    });
  });

program.parse(process.argv);
