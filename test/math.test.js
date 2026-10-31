const assert = require('node:assert/strict');
const { sum } = require('../src/math');

assert.equal(sum(2, 3), 5);
assert.equal(sum(-2, 3), 1);
assert.equal(sum(0, 0), 0);
assert.equal(sum(2.5, 1.5), 4);
assert.equal(sum('2', 3), 5);

console.log('math tests passed');
