var code = require('../main');
var expect = require('chai').expect;

describe('test', function() {
  it('should tax 10% on the first $10', function() {
  expect(code.taxCalculator(1)).to.equal(0.1);
  expect(code.taxCalculator(10)).to.equal(1);
});

it('should tax 7% on the second $10', function(){
  expect(code.taxCalculator(15)).to.equal(1.35);
});
});
