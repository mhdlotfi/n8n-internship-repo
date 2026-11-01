import { calculateTotal } from './order-calculator.js';

const items = [
  { price: 19.99, quantity: 2 },
  { price: 5.5, quantity: 1 }
];

const { subtotal, discountAmount, total } = calculateTotal(items, 10);

console.log(`Order subtotal: ${subtotal.toFixed(2)}`);
console.log(`Discount: ${discountAmount.toFixed(2)}`);
console.log(`Order total: ${total.toFixed(2)}`);
