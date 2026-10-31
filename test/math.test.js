// test/math.test.js
const { sum, multiply } = require('../src/math');

if (sum(2, 3) !== 5) {
  console.error("Test Failed: sum(2, 3) should be 5");
  process.exit(1);
}

if (multiply(3, 4) !== 12) {
  console.error("Test Failed: multiply(3, 4) should be 12");
  process.exit(1);
}

console.log("All tests passed!");
process.exit(0);