const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('use calculateNumber by sendPaymentRequestToApi through Utils', () => {
    const mySpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(mySpy.calculateNumber.callCount).to.be.equal(1);
    mySpy.calculateNumber.restore();
  });
});