var code = require('../main');
var expect = require('chai').expect;

describe('test', function() {
  it('should return true', function() {
    expect(code.taxCalculator(50)).to.equal(true);
  })
});
