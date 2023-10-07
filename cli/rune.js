#!/usr/bin/env node
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const obfuscator = require('javascript-obfuscator');
const { exec } = require('child_process');
/**
 * 
 * @requires library dependencies modules
 * 
 */
const { AnCreate } = require('./library/ancient-book');
const { obfusLib } = require('./library/obfuscator');
const { createApp } = require('./library/create-app');

/**
 * 
 * @package
 * @author <qiraxyz>
 * library omirus
 * 
 */
createApp(program, exec, fs, path, fse);
/**
 * obfuscating file data
 */
obfusLib(program, fs, path, fse, obfuscator);
/**
 * obfuscating file data
 */
AnCreate(program, exec, fs, path, fse);

program.parse(process.argv);
