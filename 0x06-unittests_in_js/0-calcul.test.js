const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Test for whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4.0);
});

  it('Test for fraction in b', () => {
    assert.strictEqual(calculateNumber(1.0, 0.5), 2.0);
});

  it('Test for fraction in a', () => {
    assert.strictEqual(calculateNumber(0.5, 3.0), 4.0);
});

  it('Test for fraction in a and b', () => {
    assert.strictEqual(calculateNumber(2.5, 3.4), 6.0);
});

  it('Test if floats sums to a whole number', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2.0);
});

  it('Test for both floating points', () => {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7.0);
});

  it('Test for negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.0, 3.0), 2.0);
});

  it('Test for both zeros', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
});

  it('Test for large whole numbers', () => {
    assert.strictEqual(calculateNumber(100000000.3, 400000000.0), 500000000);
});

  it('Test for floats with trailing numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5.0);
});

  it('Test for edge cases', () => {
    assert.equal(calculateNumber(0.4, 0.6), 1);
    assert.equal(calculateNumber(0.49, 0.51), 1);
    assert.equal(calculateNumber(-0.4, -0.6), -1);
    assert.equal(calculateNumber(-0.49, -0.51), -1);
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
});
});
