#!/usr/bin/env node
const { program } = require('commander');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const { createApp, startApp } = require('./modules/modules');

createApp(program, exec, fs, path, fse);
startApp(program, exec, fs, path, fse);

program.parse(process.argv);
