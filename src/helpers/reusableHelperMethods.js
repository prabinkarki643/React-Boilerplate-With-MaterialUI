export function calculatePercentageDiscount(regular_price, sale_price) {
  const discount_amount = regular_price - sale_price;
  const percentage = (discount_amount / regular_price) * 100;
  return percentage.toFixed(2);
}

export function calculateErrorMessageFromResponse(error) {
  var error_message;
  if (typeof error.message === 'string') {
    error_message = error.message;
  } else if (
    Array.isArray(error.message) &&
    Array.isArray(error.message[0].messages)
  ) {
    error_message = error.message[0].messages[0].message;
  } else {
    error_message = error.error || 'Unexpected error occured';
  }
  return error_message;
}
