/**
 * The function that performs arithmetic operations on two rounded numbers.
 * @param {string} type - Type of operation (SUM, SUBTRACT, DIVIDE).
 * @param {number} a - First number to be rounded and used in the operation.
 * @param {number} b - Second number to be rounded and used in the operation.
 * @returns {number|string} - Result of the arithmetic operation.
 */

function calculateNumber(type, a, b) {
    // Round the fist digit to the nearest interger
    const rounded_a = Math.round(a)
    // Round the second digit to the nearest interger
    const rounded_b = Math.round(b)
    // Retun the sum of the rounded digits
    if (type == 'SUM'){
        return rounded_a + rounded_b;
    }else if (type == 'SUBTRACT'){
        return rounded_a - rounded_b;
    }else if (type == 'DIVIDE'){
        if (rounded_b == 0){
            return 'Error';
        }
        return rounded_a / rounded_b;
    }else {
        throw new Error(`Invalid type: ${type}`);
    }
}
module.exports = calculateNumber;