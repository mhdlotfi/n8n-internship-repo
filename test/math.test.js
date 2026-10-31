const assert = require('node:assert/strict');
const { sum } = require('../src/math');

assert.equal(sum(2, 3), 5);
assert.equal(sum(-2, 3), 1);

console.log('math tests passed');
