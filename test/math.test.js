// test/math.test.js
const { sum, subtract, multiply } = require('../src/math');

if (sum(2, 3) !== 5) {
  console.error("Test Failed: sum(2, 3) should be 5");
  process.exit(1);
}

if (sum(0, 0) !== 0) {
  console.error("Test Failed: sum(0, 0) should be 0");
  process.exit(1);
}

if (sum(1.5, 2.5) !== 4) {
  console.error("Test Failed: sum(1.5, 2.5) should be 4");
  process.exit(1);
}

if (sum("2", "3") !== 5) {
  console.error('Test Failed: sum("2", "3") should be 5');
  process.exit(1);
}

if (subtract(5, 3) !== 2) {
  console.error("Test Failed: subtract(5, 3) should be 2");
  process.exit(1);
}

if (subtract(3, 5) !== -2) {
  console.error("Test Failed: subtract(3, 5) should be -2");
  process.exit(1);
}

if (subtract(2.5, 1.5) !== 1) {
  console.error("Test Failed: subtract(2.5, 1.5) should be 1");
  process.exit(1);
}

if (subtract("5", "2") !== 3) {
  console.error('Test Failed: subtract("5", "2") should be 3');
  process.exit(1);
}

if (multiply(3, 4) !== 12) {
  console.error("Test Failed: multiply(3, 4) should be 12");
  process.exit(1);
}

console.log("All tests passed!");
process.exit(0);
