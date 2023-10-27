import extractStructure from '../lib/extractor.mjs';
import { createApp } from '../lib/app.mjs';
import { AnCreate } from '../lib/grimoire.mjs';

export function handler(program) {
    program
        .version('1.1.4')
        .description('CLI Description')
    /** 
     * ----------------------------------------------------------------
     *  This is commander handler module function import from /lib/
     *  you can make new commands here and use them in your command
     *  Feel free to make your packages and upload on folder /packages/
     * ----------------------------------------------------------------
     * */

    // define command line in here
    createApp();
    AnCreate();
    extractStructure();

    program.parse(process.argv);

}
