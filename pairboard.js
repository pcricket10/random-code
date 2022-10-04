prices = [7, 1, 5, 3, 6, 4]

const stonks = prices => {
  let lowestLeft = prices[0]
  let highestRight = prices[prices.length - 1]
  for (let i = 1; i < Math.ceil(prices.length / 2); i++) {
    const left = prices[i]
    const right = prices[prices.length - 1 - i]
    if (left < lowestLeft) lowestLeft = left
    if (right > highestRight) highestRight = right


  }
  const max = highestRight - lowestLeft
  if (max > 0) return max;
  return 0;
}

console.log(stonks(prices))
