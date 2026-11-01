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

function roundMoney(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

export function calculateTotal(items, discountPercent = 0) {
  if (
    typeof discountPercent !== 'number' ||
    !Number.isFinite(discountPercent) ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    throw new TypeError('discountPercent must be a finite number between 0 and 100');
  }

  const subtotal = roundMoney(calculateSubtotal(items));
  const discountAmount = roundMoney(subtotal * discountPercent / 100);
  const total = roundMoney(subtotal - discountAmount);

  return { subtotal, discountAmount, total };
}
