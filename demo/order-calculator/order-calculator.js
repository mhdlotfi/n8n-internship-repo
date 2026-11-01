export function calculateSubtotal(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }

  return items.reduce((subtotal, item, index) => {
    if (item === null || typeof item !== 'object') {
      throw new TypeError(`items[${index}] must be an object`);
    }

    const { price, quantity } = item;

    if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
      throw new TypeError(`items[${index}].price must be a finite, non-negative number`);
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new TypeError(`items[${index}].quantity must be a positive integer`);
    }

    return subtotal + price * quantity;
  }, 0);
}
