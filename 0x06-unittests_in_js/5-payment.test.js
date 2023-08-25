const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let printSpy;

  beforeEach(() => {
    printSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    printSpy.restore();
  });

  it('Calling sendPaymentRequestToApi with 100, and 20: and prints the total once', () =>{
    const totalAmount = 100;
    const totalShipping = 20;
    const expectedSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(printSpy.calledOnce).to.be.true;
    expect(printSpy.calledWith(`The total is: ${expectedSum}`)).to.be.true
  })

  it('calling sendPaymentRequestToAPI with 10 and 10: and print the total as 20, once', () => {
    const totalAmount = 10;
    const totalShipping = 10;
    const expectedSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(printSpy.calledOnce).to.be.true;
    expect(printSpy.calledWith(`The total is: ${expectedSum}`)).to.be.true
  });
});