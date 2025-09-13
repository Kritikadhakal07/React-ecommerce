// Prices are stored in cents (integers) to avoid floating-point precision errors.
// Example: instead of $19.99, the database keeps 1999.

// (amountCents / 100) → converts cents to dollars.
// Example: 1999 / 100 = 19.99

// .toFixed(2) → makes sure it always has 2 decimal places.
// Example: 19.9 → "19.90"

// Then adds $ in front → "$19.99"

function formatMoney(amountCents){
   return `$${(amountCents / 100).toFixed(2)}`
}

export default formatMoney;