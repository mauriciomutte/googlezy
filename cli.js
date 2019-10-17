#!/usr/bin/env node

const open = require('open');

const search = process.argv.slice(2).join(' ');
console.log(`Searching for: ${search}`);

open('https://google.com/search?q=' + search);