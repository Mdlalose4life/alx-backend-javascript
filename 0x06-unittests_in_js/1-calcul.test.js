const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Tests for the sum of two rounded numbers', () => {
    assert.equal(calculateNumber('SUM', 2.2, 4.6), 7);
    assert.equal(calculateNumber('SUM', 0, 0), 0);
    assert.equal(calculateNumber('SUM', -2.2, -4.6), -7);     
  });

    
  it('Tests for the subtract of two rounded numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 2, 1), 1);   
    assert.equal(calculateNumber('SUBTRACT', 0, -1), 1);
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
    
  it('Tests for the devide of two rounded numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 2, 0), 'Error');      
  });

  it('test if an error is throwed if an invalid type is provided', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});