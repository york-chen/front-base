'use strict';

const staff = require('..');
const assert = require('assert').strict;

assert.strictEqual(staff(), 'Hello from staff');
console.info('staff tests passed');
