import fs from 'fs';
import path from 'path';
import { program } from 'commander';

function generateStructure(inputPath) {
    return generateStructureRecursive(inputPath, "");
}

function isExcludedFolder(folderName) {
    const excludedFolders = ['.idea', '.github', '.git', 'node_modules', '.gitignore', 'README.md'];
    return excludedFolders.includes(folderName);
}

function generateStructureRecursive(inputPath, indent) {
    let structure = "";
    const items = fs.readdirSync(inputPath);

    items.forEach(item => {
        const itemPath = path.join(inputPath, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory() && !isExcludedFolder(item)) {
            structure += `${indent}└─ ${item}/\n`;
            structure += generateStructureRecursive(itemPath, `${indent}   `);
        } else if (!isExcludedFolder(item)) {
            structure += `${indent}├─ ${item}\n`;
        }
    });

    return structure;
}

export default function extractStructure() {
    program
    .command('generate-structure')
    .description('Generate structure and write it to omirus.struct')
    .action((source, output) => {     
        const currentDirectory = process.cwd();
        const structure = generateStructure(currentDirectory);
    
        const omirusStructPath = path.join(currentDirectory, 'omirus.struct');
    
        fs.writeFileSync(omirusStructPath, structure, 'utf-8');
    
        console.log(`Structure has been written to ${omirusStructPath}`);
    });
}
