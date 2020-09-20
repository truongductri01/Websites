export function calculateSum(basket) {
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    const item = basket[i];
    sum += parseFloat(item.price);
  }

  return sum;
}
