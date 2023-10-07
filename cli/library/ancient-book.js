module.exports = {
    AnCreate: function (program, exec, fs, path, fse) {
        program
            .command('make <file> [path]')
            .description('Create a new file or folder.')
            .action((file, inputPath) => {
                let destinationPath;

                // Tentukan path berdasarkan tipe file
                switch (file) {
                    case 'controller':
                        destinationPath = path.join('app', 'controllers');
                        break;
                    case 'model':
                        destinationPath = path.join('app', 'models');
                        break;
                    case 'migration':
                        destinationPath = path.join('database', 'migrations');
                        break;
                    default:
                        console.error('Tipe file tidak valid.');
                        return;
                }

                inputPath ? destinationPath = path.join(destinationPath) : console.log(`file ${file} not found.`);

                !fs.existsSync(destinationPath) ? fse.ensureDirSync(destinationPath) : null;

                const fileName = `${inputPath}` || `${inputPath}` + '.php';
                const filePath = path.join(destinationPath, fileName);

                // Cek apakah file sudah ada
                if (fs.existsSync(filePath)) {
                    console.error(`File ${fileName} sudah ada.`);
                } else {
                    // Buat file
                    fs.writeFileSync(filePath, '<?php\n\n// Isi file Anda di sini\n');

                    console.log(`File ${fileName} berhasil dibuat di ${filePath}`);
                }
            });
    }
};
