#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import fse from 'fs-extra';
import { program } from 'commander';
import { exec } from 'child_process';
import { createApp } from './lib/app.mjs';
import { AnCreate } from './lib/grimoire.mjs';

createApp(program, exec, fs, path, fse);
AnCreate(program, exec, fs, path, fse, chalk);

program
.version('1.1.2')
.description('CLI Description')

program.parse(process.argv);