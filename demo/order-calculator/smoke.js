import { calculateSubtotal } from './order-calculator.js';

const items = [
  { price: 19.99, quantity: 2 },
  { price: 5.5, quantity: 1 }
];

console.log(`Order subtotal: ${calculateSubtotal(items).toFixed(2)}`);
