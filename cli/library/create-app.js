module.exports = {
  createApp: function (program, exec, fs, path, fse) {
    program
      .version('1.0.0')
      .description('CLI Description')
      .command('create-app <folderName> [repositoryName]')
      .description('Create a new app from a GitHub repository.')
      .action((folderName, repositoryName) => {
        if (folderName === '.') {
          folderName = process.cwd();
        }
        const destinationPath = path.resolve(folderName);

        if (!repositoryName) {
          console.error('GitHub repository name is missing.');
          return;
        }

        const githubRepo = `https://github.com/${repositoryName}.git`;

        exec(`git clone ${githubRepo} ${destinationPath}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error cloning repository: ${error.message}`);
            return;
          }
          console.log(`App created successfully in path '${folderName}'`);

          const gitFolder = path.join(destinationPath, '.git');
          const ideaFolder = path.join(destinationPath, '.idea');
          const lockFile = path.join(destinationPath, 'package-lock.json');
          if (fs.existsSync(gitFolder)) {
            console.log(`Clearing data directory in path '${folderName}'`);
            fse.removeSync(gitFolder);
            fse.removeSync(ideaFolder);
            fse.removeSync(lockFile);
          } else {
            console.log(`Directory in path '${folderName}' is already cleaned.`);
          }
        });
      });
  }
}