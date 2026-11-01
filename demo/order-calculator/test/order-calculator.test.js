import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSubtotal, calculateTotal } from '../order-calculator.js';

test('calculates the subtotal for regular items', () => {
  const items = [
    { price: 12.5, quantity: 2 },
    { price: 4, quantity: 3 }
  ];

  assert.equal(calculateSubtotal(items), 37);
});

test('returns zero for an empty array', () => {
  assert.equal(calculateSubtotal([]), 0);
});

test('rejects invalid input and item values', () => {
  assert.throws(() => calculateSubtotal('items'), /items must be an array/);
  assert.throws(() => calculateSubtotal([{ price: -1, quantity: 1 }]), /price/);
  assert.throws(() => calculateSubtotal([{ price: Infinity, quantity: 1 }]), /price/);
  assert.throws(() => calculateSubtotal([{ price: 1, quantity: 0 }]), /quantity/);
  assert.throws(() => calculateSubtotal([{ price: 1, quantity: 1.5 }]), /quantity/);
  assert.throws(() => calculateSubtotal([{ price: 1, quantity: -2 }]), /quantity/);
  assert.throws(() => calculateSubtotal([{ price: '1', quantity: 1 }]), /price/);
});

test('calculates a total with zero discount and rounds money to two decimals', () => {
  const items = [{ price: 12.345, quantity: 2 }, { price: 4, quantity: 1 }];

  assert.deepEqual(calculateTotal(items, 0), {
    subtotal: 28.69,
    discountAmount: 0,
    total: 28.69
  });
});

test('calculates a ten percent discount', () => {
  const items = [
    { price: 19.99, quantity: 2 },
    { price: 5.5, quantity: 1 }
  ];

  assert.deepEqual(calculateTotal(items, 10), {
    subtotal: 45.48,
    discountAmount: 4.55,
    total: 40.93
  });
});

test('calculates a hundred percent discount', () => {
  assert.deepEqual(calculateTotal([{ price: 25, quantity: 2 }], 100), {
    subtotal: 50,
    discountAmount: 50,
    total: 0
  });
});

test('rejects an invalid discount percentage', () => {
  const items = [{ price: 10, quantity: 1 }];

  assert.throws(() => calculateTotal(items, -1), /discountPercent/);
  assert.throws(() => calculateTotal(items, 100.01), /discountPercent/);
  assert.throws(() => calculateTotal(items, Infinity), /discountPercent/);
  assert.throws(() => calculateTotal(items, NaN), /discountPercent/);
  assert.throws(() => calculateTotal(items, '10'), /discountPercent/);
});
