#!/usr/bin/env node
import { handler } from '../handler/handler.omirus.mjs';
import { program } from 'commander';
/**
 *  ----------------------------------------------------------------
 *   main connector for packages lib and handler
 *  ----------------------------------------------------------------
 */
handler(program);