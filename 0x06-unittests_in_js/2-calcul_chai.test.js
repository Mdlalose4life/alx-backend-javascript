const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect;

describe('calculateNumber', () => {
  it('Tests for the sum of two rounded numbers', () => {
    expect(calculateNumber('SUM', 2.2, 4.6)).to.be.equal(7);
    expect(calculateNumber('SUM', 0, 0)).to.be.equal(0);
    expect(calculateNumber('SUM', -2.2, -4.6)).to.be.equal(-7);     
  });

    
  it('Tests for the subtract of two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 2, 1)).to.be.equal(1);
    expect(calculateNumber('SUBTRACT', 0, -1)).to.be.equal(1);
    expect(calculateNumber('SUBTRACT', 0, 0)).to.be.equal(0);
  });
    
  it('Tests for the devide of two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.be.equal(2);
    expect(calculateNumber('DIVIDE', 0, 0)).to.be.equal('Error');
    expect(calculateNumber('DIVIDE', 2, 0)).to.be.equal('Error');      
  });

  it('test if an error is throwed if an invalid type is provided', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});