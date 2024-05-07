'use strict';

const visitor = require('..');
const assert = require('assert').strict;

assert.strictEqual(visitor(), 'Hello from visitor');
console.info('visitor tests passed');
