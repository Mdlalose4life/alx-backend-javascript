/**
 * The function that adds two rounded numbers
 * @param {number} a - First digit to be rounded and added
 * @param {number} b - Second digit to be rounded and added
 * @returns - The sum of rounded first and second digit.
 */


function calculateNumber(a, b) {
  // Round the fist digit to the nearest interger
  const rounded_a = Math.round(a)
  // Round the second digit to the nearest interger
  const rounded_b = Math.round(b)
  // Retun the sum of the rounded digits
  return rounded_a + rounded_b
}
// Export calculateNumber so it can be imported to another module
module.exports = calculateNumber;