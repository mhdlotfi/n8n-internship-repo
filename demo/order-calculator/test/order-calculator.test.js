import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSubtotal } from '../order-calculator.js';

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
