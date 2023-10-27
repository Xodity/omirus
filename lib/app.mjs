import ora from 'ora';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import fse from 'fs-extra';
import { program } from 'commander';
import { exec } from 'child_process';

export const createApp = () => {
  program
    .command('create-app <folderName> [repositoryName]')
    .description('Create a new app from a GitHub repository.')
    .action((folderName, repositoryName) => {

      folderName === '.' ? folderName = process.cwd() : null;
      !repositoryName ? (console.error(`github ${repositoryName} repository name is missing.`), null) : null;

      const destinationPath = path.resolve(folderName);
      const githubRepo = `https://github.com/${repositoryName}.git`;
      const spinner = ora(`Creating the app in '${folderName}'`).start();

      exec(`git clone ${githubRepo} ${destinationPath}`, (error, stdout, stderr) => {
        if (error) {
          spinner.fail(`Error cloning repository: ${error.message}`);
          return;
        }
        spinner.succeed(`App created successfully in path '${folderName}'`);

        const gitFolder = path.join(destinationPath, '.git');
        const githubFolder = path.join(destinationPath, '.github');
        const ideaFolder = path.join(destinationPath, '.idea');
        const lockFile = path.join(destinationPath, 'package-lock.json');

        if (fs.existsSync(gitFolder)) {
          const cleanupSpinner = ora(`Clearing data directory in path '${folderName}'`).start();
          fse.removeSync(gitFolder);
          fse.removeSync(ideaFolder);
          fse.removeSync(lockFile);
          fse.removeSync(githubFolder);
          cleanupSpinner.succeed(`Directory in path '${folderName}' has been cleaned.`);
        } else {
          console.log(`Directory in path '${folderName}' is already cleaned.`);
        }
      });
    });
};

export default createApp;
