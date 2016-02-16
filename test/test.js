var code = require('../main');
var expect = require('chai').expect;

describe('test', function() {
  it('should tax 10% on the first $10', function() {
    expect(code.taxCalculator(1)).to.equal(0.1);
    expect(code.taxCalculator(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function() {
    expect(code.taxCalculator(15)).to.equal(1.35);
  });

  it('should tax 5% on the third $10', function() {
    expect(code.taxCalculator(25)).to.equal(1.95);
  });

  it('should tax 3% on anything over $30', function() {
    expect(code.taxCalculator(35)).to.equal(2.35);
    expect(code.taxCalculator(40)).to.equal(2.50);
  });
});
